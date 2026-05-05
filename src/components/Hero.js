"use client";

import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaShieldAlt, FaTools } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-slate-50 pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col z-10"
          >
          

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <Image
                  src="/logo_transparente.png"
                  alt="Logo de GineSAT"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="border-l-2 border-blue-200 pl-4">
                <p className="text-sm font-bold uppercase tracking-tight text-blue-800">Servicio técnico en Torrent</p>
                <p className="text-gray-500 text-sm">Climatización, calderas y mantenimiento</p>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Expertos en <span className="text-blue-600">climatización</span> <br className="hidden md:block" />
              y <span className="text-orange-500">calefacción</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              ¿Problemas con tu aire acondicionado o caldera? Nuestros técnicos certificados ofrecen soluciones rápidas y garantizadas. <span className="font-semibold text-gray-800">Más de 15 años</span> cuidando de tu hogar.
            </p>

            {/* Benefits List - More subtle and integrated */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
              {[
                "Revisión 40€ (descontable)",
                "Garantía de 1 año",
                "Presupuesto cerrado",
                "Técnicos certificados"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="contacto"
                smooth={true}
                duration={500}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg py-4 px-8 text-center cursor-pointer transition-all shadow-lg hover:shadow-blue-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Solicita tu presupuesto gratis
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+34663215621"
                className="flex items-center justify-center gap-2 border-2 border-blue-600 hover:bg-blue-50 text-blue-600 font-bold rounded-lg py-4 px-8 text-center transition-all group"
              >
                <FaTools className="group-hover:rotate-12 transition-transform" />
                Llamar Ahora
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <FaShieldAlt className="text-blue-600 text-xl" />
                <span className="text-xs font-bold uppercase tracking-tighter text-gray-500">Garantía oficial</span>
              </div>
              <div className="flex items-center space-x-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <FaClock className="text-blue-600 text-xl" />
                <span className="text-xs font-bold uppercase tracking-tighter text-gray-500">Respuesta 30 min</span>
              </div>
              <div className="flex items-center space-x-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <span className="text-xs font-bold uppercase tracking-tighter text-gray-500">Satisfacción 100%</span>
              </div>
            </div>
          </motion.div>
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border-2 border-blue-100 rounded-3xl -z-10 translate-x-4 translate-y-4" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/aire.png"
                  alt="Técnico realizando mantenimiento de aire acondicionado"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 border border-blue-50"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg shadow-lg shadow-blue-200">
                  <FaCheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Confianza</p>
                  <p className="text-lg font-extrabold text-gray-900">+1000 Clientes</p>
                  <p className="text-[10px] text-gray-400">Servicio profesional garantizado</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero; 
