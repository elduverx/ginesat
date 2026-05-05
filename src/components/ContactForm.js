"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const initialFormData = {
  nombre: '',
  email: '',
  telefono: '',
  servicio: 'aire-acondicionado',
  mensaje: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ loading: false, message: '', error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', error: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'No se pudo enviar la solicitud.');
      }

      setStatus({
        loading: false,
        message: 'Solicitud enviada. Te responderemos lo antes posible.',
        error: false,
      });
      setFormData(initialFormData);
    } catch (error) {
      setStatus({
        loading: false,
        message: error.message,
        error: true,
      });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Canales de Contacto</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6">
              ¿Hablamos de tu <span className="text-blue-600">avería</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              Estamos disponibles para cualquier consulta técnica o urgencia. Déjanos tus datos y un técnico especialista te llamará en menos de 15 minutos.
            </p>

            <div className="space-y-4">
              {[
                { icon: <FaPhoneAlt />, title: 'Teléfono Urgencias', detail: '+34 663 215 621', color: 'blue' },
                { icon: <FaEnvelope />, title: 'Correo Electrónico', detail: 'info@ginesat.com', color: 'slate' },
                { icon: <FaMapMarkerAlt />, title: 'Sede Principal', detail: 'Torrent, Valencia', color: 'slate' },
                { icon: <FaClock />, title: 'Horario de Atención', detail: '24/7 para Emergencias', color: 'orange' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-xl shadow-lg ${
                    item.color === 'blue' ? 'bg-blue-600 text-white shadow-blue-100' :
                    item.color === 'orange' ? 'bg-orange-500 text-white shadow-orange-100' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.title}</p>
                    <p className="text-xl font-black text-gray-900">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-black text-gray-900 mb-8">Solicitar Presupuesto Gratis</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-gray-900"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="600 000 000"
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Tipo de Servicio</label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-gray-900 appearance-none cursor-pointer"
                  >
                    <option value="aire-acondicionado">Reparación Aire Acondicionado</option>
                    <option value="caldera-gas">Reparación Caldera de Gas</option>
                    <option value="mantenimiento">Mantenimiento Preventivo</option>
                    <option value="instalacion">Nueva Instalación</option>
                    <option value="otros">Otros Servicios</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Cuéntanos qué ocurre</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe brevemente el problema..."
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-gray-900 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black shadow-xl shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200 transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-3 mt-4"
                >
                  <FaPaperPlane /> {status.loading ? 'Enviando...' : 'Enviar Solicitud'}
                </button>

                {status.message && (
                  <p className={`text-center text-sm font-bold ${status.error ? 'text-red-600' : 'text-blue-700'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
