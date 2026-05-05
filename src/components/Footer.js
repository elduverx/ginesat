"use client";

import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    { title: 'Empresa', links: [
      { name: 'Inicio', to: 'inicio' },
      { name: 'Nosotros', to: 'sobre-nosotros' },
      { name: 'Servicios', to: 'servicios' },
      { name: 'Opiniones', to: 'opiniones' },
    ]},
    { title: 'Servicios', links: [
      { name: 'Aire Acondicionado', to: 'servicios' },
      { name: 'Calderas de Gas', to: 'servicios' },
      { name: 'Mantenimiento', to: 'servicios' },
      { name: 'Urgencias 24/7', to: 'servicios' },
    ]},
  ];

  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="relative h-12 w-12 transition-transform duration-500 group-hover:rotate-12">
                <Image src="/logo_transparente.png" alt="GineSAT" fill className="object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter leading-none">
                  Gine<span className="text-orange-400">SAT</span>
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300">Servicios Técnicos</span>
              </div>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-8 max-w-xs">
              Especialistas en confort térmico con más de 15 años de experiencia. Calidad, rapidez y garantía oficial en cada reparación.
            </p>
            <div className="flex space-x-3">
              {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-xl bg-blue-900 flex items-center justify-center text-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          {footerLinks.map((group, i) => (
            <div key={i}>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-blue-300 mb-8">{group.title}</h3>
              <ul className="space-y-4">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-blue-100/60 hover:text-white transition-colors cursor-pointer text-sm font-bold flex items-center group"
                    >
                      <FaChevronRight size={10} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-blue-300 mb-8">Contacto</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-blue-900 flex-shrink-0 flex items-center justify-center text-blue-400">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-sm text-blue-100/70 leading-snug">
                  Mare de Deu de la Purificacio 26, 46900 Torrent, Valencia
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-blue-900 flex-shrink-0 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaPhone />
                </div>
                <a href="tel:+34663215621" className="text-lg font-black text-white hover:text-blue-300 transition-colors">
                  +34 663 215 621
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-blue-900 flex-shrink-0 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaEnvelope />
                </div>
                <a href="mailto:info@ginesat.com" className="text-sm font-bold text-blue-100/70 hover:text-white transition-colors">
                  info@ginesat.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-blue-100/40 uppercase tracking-widest">
            © {year} GineSAT Servicios. Diseño de alto rendimiento.
          </p>
          <div className="flex gap-8">
            {['Aviso Legal', 'Privacidad', 'Cookies'].map((text, i) => (
              <a key={i} href="#" className="text-[10px] font-black uppercase tracking-widest text-blue-100/40 hover:text-blue-300 transition-colors">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
