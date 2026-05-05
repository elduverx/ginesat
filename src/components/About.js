"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaUserFriends, FaRecycle, FaCheckCircle, FaAward, FaHistory } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const stats = [
    { label: 'Años de Experiencia', value: '15+', icon: <FaHistory className="text-blue-600" /> },
    { label: 'Clientes Satisfechos', value: '1000+', icon: <FaUserFriends className="text-blue-600" /> },
    { label: 'Garantía Oficial', value: '100%', icon: <FaAward className="text-blue-600" /> },
  ];

  return (
    <section id="sobre-nosotros" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <Image 
                src="/airee.png" 
                alt="Equipo de técnicos de GineSAT" 
                width={600}
                height={800}
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -right-10 hidden md:block z-20">
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-blue-50">
                <div className="grid grid-cols-1 gap-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-xl">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-2xl font-black text-gray-900 leading-none">{stat.value}</p>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10" />
          </motion.div>
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Nuestra Trayectoria</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-8 leading-tight">
              Más de <span className="text-blue-600">15 años</span> ofreciendo confianza técnica
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                En <span className="font-bold text-blue-900">GineSAT</span> entendemos que tu confort no puede esperar. Por eso hemos consolidado un equipo de técnicos certificados especialistas en las marcas líderes del mercado.
              </p>
              <p>
                Nuestra filosofía se basa en tres pilares: <span className="text-gray-900 font-semibold">transparencia total</span> en los presupuestos, <span className="text-gray-900 font-semibold">rapidez de respuesta</span> y una <span className="text-gray-900 font-semibold">calidad técnica</span> avalada por miles de reparaciones con éxito en Torrent y toda la provincia de Valencia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Técnicos Certificados RITE",
                "Garantía oficial por escrito",
                "Repuestos originales",
                "Atención personalizada"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-500 text-xl" />
                  <span className="font-bold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95"
            >
              Conoce nuestro equipo
            </a>
          </motion.div>
        </div>

        {/* Mobile Stats (visible only on small screens) */}
        <div className="grid grid-cols-2 gap-4 mt-20 md:hidden">
          {stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-blue-50 text-center">
              <p className="text-3xl font-black text-blue-600">{stat.value}</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 
