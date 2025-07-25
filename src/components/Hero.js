"use client";

import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-flex items-center text-sm font-medium mb-4">
              <FaClock className="mr-2" />
              Servicio de emergencia 24/7
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              <span className="text-blue-600">GineSAT</span> - Expertos en <span className="text-blue-600">climatización</span> y <span className="text-orange-500">calefacción</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              ¿Problemas con tu aire acondicionado o caldera? Nuestros técnicos certificados ofrecen soluciones rápidas y garantizadas. Más de 15 años de experiencia en el sector.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">¿Por qué elegirnos?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Diagnóstico gratuito en la primera visita</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Garantía de 1 año en todas las reparaciones</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Precios sin sorpresas - Presupuesto cerrado</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Técnicos certificados y con experiencia</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link
                to="contacto"
                smooth={true}
                duration={500}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-3 px-6 text-center cursor-pointer transition-colors flex items-center justify-center"
              >
                Solicita tu presupuesto gratis
              </Link>
              <a
                href="tel:+34663215621"
                className="border border-blue-600 hover:bg-blue-50 text-blue-600 font-medium rounded-md py-3 px-6 text-center transition-colors flex items-center justify-center"
              >
                <FaClock className="mr-2" />
                Emergencia 24/7
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center">
                <div className="mr-2 bg-green-100 p-2 rounded-full">
                  <FaShieldAlt className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">Garantía oficial</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 bg-green-100 p-2 rounded-full">
                  <FaClock className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">Respuesta en 30 min</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 bg-green-100 p-2 rounded-full">
                  <FaCheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">Satisfacción garantizada</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative w-full h-[400px]">
                  <Image
                    src="/tecnico.jpg"
                    alt="Técnico realizando mantenimiento de aire acondicionado"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaCheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Más de</p>
                    <p className="text-lg font-bold text-gray-900">1000+ clientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 