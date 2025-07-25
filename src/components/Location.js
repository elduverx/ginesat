"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestra <span className="text-blue-600">ubicación</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Encuentra nuestra oficina principal en Torrent. Estamos bien comunicados por transporte público.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2 h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.1234567890123!2d-0.4612345678901234!3d39.46123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4c1c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sMare%20de%20Deu%20de%20la%20Purificacio%2026%2C%2046900%20Torrent%2C%20Valencia!5e0!3m2!1ses!2ses!4v1623172752834!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación de la empresa"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visítanos</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Dirección</h4>
                  <p className="text-gray-600">Mare de Deu de la Purificacio 26</p>
                  <p className="text-gray-600">46900 Torrent, Valencia</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Horario</h4>
                  <p className="text-gray-600">Lunes - Viernes: 08:00 - 20:00</p>
                  <p className="text-gray-600">Sábados: 09:00 - 14:00</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Contacto</h4>
                  <p className="text-gray-600">Teléfono: +34 663 215 621</p>
                  <p className="text-gray-600">Email: ginesat24@gmail.com</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://www.google.com/maps/dir//Mare+de+Deu+de+la+Purificacio+26,+46900+Torrent,+Valencia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition-colors"
                >
                  Cómo llegar
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Zona Local</h3>
            <p className="text-gray-600 mb-4">
              Servicio rápido en Torrent y alrededores inmediatos.
            </p>
            <p className="text-blue-600 font-medium">Tiempo de respuesta: 1-3 horas</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Comunidad Valenciana</h3>
            <p className="text-gray-600 mb-4">
              Damos servicio a toda la Comunidad Valenciana.
            </p>
            <p className="text-blue-600 font-medium">Tiempo de respuesta: 3-6 horas</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Servicio Rápido</h3>
            <p className="text-gray-600 mb-4">
              Respuesta rápida durante horario laboral para todas tus necesidades.
            </p>
            <a
              href="tel:+34663215621"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Llamar ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location; 