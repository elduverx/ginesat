"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaTools, FaWrench, FaFire, FaThermometerHalf, FaCheck, FaClock, FaEuroSign, FaShieldAlt, FaChevronRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Aire Acondicionado',
      subtitle: 'Reparación y Carga',
      description: 'Solucionamos cualquier avería en equipos domésticos e industriales. Recarga de gas refrigerante y diagnóstico rápido.',
      icon: <FaSnowflake className="w-7 h-7" />,
      color: 'blue',
      features: ['Revisión 40€', 'Reparación 24h', 'Garantía 1 año']
    },
    {
      id: 2,
      title: 'Calderas de Gas',
      subtitle: 'Reparación Urgente',
      description: 'Servicio técnico para todas las marcas. Solucionamos problemas de encendido, ruidos o fugas con certificación oficial.',
      icon: <FaFire className="w-7 h-7" />,
      color: 'orange',
      features: ['Técnicos Oficiales', 'Presupuesto Cerrado', 'Piezas Originales']
    },
    {
      id: 3,
      title: 'Mantenimiento',
      subtitle: 'Preventivo y Correctivo',
      description: 'Optimiza el consumo de tus equipos y evita averías costosas. Limpieza de filtros y revisión de componentes clave.',
      icon: <FaTools className="w-7 h-7" />,
      color: 'blue',
      features: ['Ahorro Energético', 'Limpieza Profesional', 'Larga Vida Útil']
    },
    {
      id: 4,
      title: 'Instalaciones',
      subtitle: 'Nuevos Equipos',
      description: 'Asesoramiento personalizado para elegir el sistema más eficiente. Instalación profesional con puesta en marcha incluida.',
      icon: <FaWrench className="w-7 h-7" />,
      color: 'blue',
      features: ['Estudio Gratuito', 'Financiación', 'Garantía Total']
    },
    {
      id: 5,
      title: 'Gasóleo',
      subtitle: 'Calderas Industriales',
      description: 'Mantenimiento especializado para calderas de gasóleo. Ajuste de combustión y cumplimiento de la normativa vigente.',
      icon: <FaThermometerHalf className="w-7 h-7" />,
      color: 'orange',
      features: ['Normativa RITE', 'Alta Eficiencia', 'Limpieza Quemadores']
    },
    {
      id: 6,
      title: 'Revisiones',
      subtitle: 'Certificación Oficial',
      description: 'Realizamos la revisión obligatoria de tu caldera. Emitimos el certificado oficial necesario para tu tranquilidad.',
      icon: <FaCheck className="w-7 h-7" />,
      color: 'orange',
      features: ['Precio Fijo 40€', 'Certificado Legal', 'Seguridad Total']
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Servicios Profesionales</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
              Soluciones de <span className="text-blue-600">Climatización</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Técnicos certificados con más de 15 años de experiencia. Ofrecemos rapidez, transparencia y garantía oficial en cada intervención.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="tel:+34663215621" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Ver todos los servicios <FaChevronRight size={12} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 border border-slate-100"
            >
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                service.color === 'blue' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-orange-500 text-white shadow-lg shadow-orange-200'
              }`}>
                {service.icon}
              </div>
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{service.subtitle}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center ${service.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
                      <FaCheck size={10} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 font-bold text-sm text-blue-600 group-hover:translate-x-2 transition-transform"
              >
                Solicitar información <FaChevronRight size={10} />
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* Urgent Service Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 relative rounded-[2.5rem] bg-blue-900 overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 skew-x-12 translate-x-1/4 opacity-50" />
          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <FaClock className="animate-pulse" /> Atención Inmediata
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">¿Tienes una avería urgente?</h3>
              <p className="text-blue-100 text-lg max-w-xl">
                Nuestro equipo de guardia está listo para atenderte en menos de 30 minutos en Torrent y alrededores. Sin costes ocultos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="tel:+34663215621"
                className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-center shadow-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-3 active:scale-95"
              >
                <FaPhoneAlt /> Llamar Ahora
              </a>
              <div className="flex flex-col items-center justify-center text-blue-200 px-6">
                <span className="text-2xl font-bold text-white tracking-wider">+34 663 215 621</span>
                <span className="text-xs uppercase font-bold">Respuesta inmediata</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Internal icon for the callout since FaPhoneAlt wasn't imported in previous scope
const FaPhoneAlt = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
  </svg>
);

export default Services; 
