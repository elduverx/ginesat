"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaUserFriends, FaRecycle } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const values = [
    {
      id: 1,
      title: 'Excelencia',
      description: 'Buscamos la excelencia en cada servicio, utilizando las mejores técnicas y herramientas del mercado.',
      icon: <FaMedal className="w-8 h-8 text-blue-600" />
    },
    {
      id: 2,
      title: 'Compromiso',
      description: 'Nos comprometemos con cada cliente para ofrecer soluciones duraderas y de calidad.',
      icon: <FaUserFriends className="w-8 h-8 text-blue-600" />
    },
    {
      id: 3,
      title: 'Sostenibilidad',
      description: 'Apostamos por la eficiencia energética y el cuidado del medio ambiente en todas nuestras instalaciones.',
      icon: <FaRecycle className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-blue-50 absolute -top-6 -left-6 w-24 h-24 rounded-lg"></div>
              <div className="bg-orange-50 absolute -bottom-6 -right-6 w-24 h-24 rounded-lg"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/air.jpg" 
                  alt="Equipo de técnicos de climatización" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold text-blue-600">15+</p>
                  <p className="text-gray-600 text-sm">Años de experiencia</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Sobre <span className="text-blue-600">GineSAT</span>
            </h2>
            <p className="text-lg text-gray-600">
              En GineSAT somos especialistas en climatización y calefacción con más de 15 años de experiencia en el sector. Nuestro equipo de técnicos certificados está preparado para ofrecer soluciones profesionales adaptadas a cualquier necesidad.
            </p>
            <p className="text-lg text-gray-600">
              Desde nuestros inicios, hemos apostado por la calidad, la formación continua y la satisfacción del cliente como pilares fundamentales de nuestro trabajo diario.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Nuestros valores</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value) => (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: value.id * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50"
                  >
                    <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#contacto"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Contacta con nosotros
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 