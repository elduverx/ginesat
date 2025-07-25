"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaTools, FaWrench, FaFire, FaThermometerHalf, FaCheck, FaClock, FaEuroSign, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Reparación de Aire Acondicionado',
      description: '¿Tu aire acondicionado no funciona correctamente? Nuestros técnicos certificados solucionan cualquier avería con garantía.',
      icon: <FaSnowflake className="w-8 h-8 text-blue-500" />,
      features: [
        'Diagnóstico 35€ (descontable del total)',
        'Reparación en 24 horas',
        'Recarga de gas refrigerante',
        'Garantía de 1 año'
      ],
      benefits: [
        { icon: <FaClock />, text: 'Respuesta en 30 minutos' },
        { icon: <FaEuroSign />, text: 'Precios sin sorpresas' },
        { icon: <FaShieldAlt />, text: 'Garantía oficial' }
      ]
    },
    {
      id: 2,
      title: 'Mantenimiento de Climatización',
      description: 'Evita averías costosas con nuestro servicio de mantenimiento preventivo. Optimizamos el rendimiento y prolongamos la vida útil de tus equipos.',
      icon: <FaTools className="w-8 h-8 text-blue-500" />,
      features: [
        'Limpieza profesional',
        'Revisión completa',
        'Optimización energética',
        'Informe detallado'
      ],
      benefits: [
        { icon: <FaClock />, text: 'Mantenimiento programado' },
        { icon: <FaEuroSign />, text: 'Ahorro energético' },
        { icon: <FaShieldAlt />, text: 'Prevención de averías' }
      ]
    },
    {
      id: 3,
      title: 'Instalación de Aire Acondicionado',
      description: 'Instalación profesional con garantía de calidad. Te asesoramos para elegir el equipo más eficiente para tu hogar o negocio.',
      icon: <FaWrench className="w-8 h-8 text-blue-500" />,
      features: [
        'Estudio gratuito',
        'Instalación certificada',
        'Puesta en marcha',
        'Formación de uso'
      ],
      benefits: [
        { icon: <FaClock />, text: 'Instalación en 24h' },
        { icon: <FaEuroSign />, text: 'Financiación disponible' },
        { icon: <FaShieldAlt />, text: 'Garantía de instalación' }
      ]
    },
    {
      id: 4,
      title: 'Reparación de Calderas de Gas',
      description: 'Servicio técnico oficial para todas las marcas. Solucionamos cualquier avería con garantía y certificación oficial.',
      icon: <FaFire className="w-8 h-8 text-orange-500" />,
      features: [
        'Diagnóstico 35€ (descontable del total)',
        'Reparación urgente',
        'Certificación oficial',
        'Garantía de 1 año'
      ],
      benefits: [
        { icon: <FaClock />, text: 'Respuesta rápida' },
        { icon: <FaEuroSign />, text: 'Presupuesto cerrado' },
        { icon: <FaShieldAlt />, text: 'Técnicos certificados' }
      ]
    },
    {
      id: 5,
      title: 'Mantenimiento de Calderas de Gasóleo',
      description: 'Mantenimiento preventivo y correctivo para calderas de gasóleo. Cumplimos con la normativa vigente y optimizamos el consumo.',
      icon: <FaThermometerHalf className="w-8 h-8 text-orange-500" />,
      features: [
        'Limpieza profesional',
        'Ajuste de combustión',
        'Verificación de seguridad',
        'Informe detallado'
      ],
      benefits: [
        { icon: <FaClock />, text: 'Mantenimiento anual' },
        { icon: <FaEuroSign />, text: 'Ahorro en combustible' },
        { icon: <FaShieldAlt />, text: 'Cumplimiento normativo' }
      ]
    },
    {
      id: 6,
      title: 'Revisión Oficial de Calderas',
      description: 'Servicio oficial de revisión y certificación conforme a la normativa vigente. Evita sanciones y asegura el correcto funcionamiento.',
      icon: <FaCheck className="w-8 h-8 text-orange-500" />,
      features: [
        'Revisión normativa',
        'Certificación oficial',
        'Detección de anomalías',
        'Informe detallado'
      ],
      benefits: [
        { icon: <FaClock />, text: 'Cita inmediata' },
        { icon: <FaEuroSign />, text: 'Precio cerrado' },
        { icon: <FaShieldAlt />, text: 'Certificado oficial' }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Soluciones profesionales para mantener tus sistemas de climatización y calefacción en perfecto estado. Respuesta rápida y garantía en todos nuestros servicios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <FaCheck className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-blue-500 mr-1">{benefit.icon}</span>
                        {benefit.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#contacto"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Solicitar presupuesto
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-blue-50 rounded-lg p-5 border border-blue-100">
              <h3 className="text-xl font-medium text-gray-800 mb-2">¿Necesitas un servicio urgente?</h3>
              <p className="text-gray-600 mb-4">Contacta con nosotros y te atenderemos lo antes posible durante nuestro horario laboral.</p>
              <a
                href="tel:+34663215621"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 px-5 text-center transition-colors"
              >
                <FaClock className="inline-block mr-2" />
                Llamar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 