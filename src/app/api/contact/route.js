import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const requiredFields = ['nombre', 'telefono', 'servicio', 'mensaje'];

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export async function POST(request) {
  try {
    const body = await request.json();
    const missingField = requiredFields.find((field) => !body?.[field]?.trim());

    if (missingField) {
      return NextResponse.json(
        { message: 'Faltan campos obligatorios.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: {
        user: process.env.SMTP_USER || 'info@ginesat.com',
        pass: process.env.SMTP_PASS,
      },
    });

    if (!process.env.SMTP_PASS) {
      return NextResponse.json(
        { message: 'Falta configurar SMTP_PASS en el servidor.' },
        { status: 500 }
      );
    }

    const from = process.env.SMTP_FROM || `"GineSAT" <${process.env.SMTP_USER || 'info@ginesat.com'}>`;
    const to = process.env.CONTACT_TO || process.env.SMTP_USER || 'info@ginesat.com';
    const replyTo = body.email?.trim() || undefined;

    const safeBody = {
      nombre: escapeHtml(body.nombre),
      telefono: escapeHtml(body.telefono),
      email: escapeHtml(body.email || 'No indicado'),
      servicio: escapeHtml(body.servicio),
      mensaje: escapeHtml(body.mensaje).replace(/\n/g, '<br />'),
    };

    await transporter.sendMail({
      from,
      to,
      replyTo,
      subject: `Nueva solicitud GineSAT - ${body.servicio}`,
      text: [
        'Nueva solicitud desde la web de GineSAT',
        '',
        `Nombre: ${body.nombre}`,
        `Telefono: ${body.telefono}`,
        `Email: ${body.email || 'No indicado'}`,
        `Servicio: ${body.servicio}`,
        '',
        'Mensaje:',
        body.mensaje,
      ].join('\n'),
      html: `
        <h2>Nueva solicitud desde la web de GineSAT</h2>
        <p><strong>Nombre:</strong> ${safeBody.nombre}</p>
        <p><strong>Telefono:</strong> ${safeBody.telefono}</p>
        <p><strong>Email:</strong> ${safeBody.email}</p>
        <p><strong>Servicio:</strong> ${safeBody.servicio}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeBody.mensaje}</p>
      `,
    });

    return NextResponse.json({ message: 'Solicitud enviada correctamente.' });
  } catch (error) {
    console.error('Error enviando formulario de contacto:', error);
    return NextResponse.json(
      { message: 'No se pudo enviar la solicitud.' },
      { status: 500 }
    );
  }
}
