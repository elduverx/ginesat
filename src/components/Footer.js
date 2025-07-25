"use client";

import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y Acerca de */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              GineSAT<span className="text-blue-400">Servicios</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Expertos en climatización y calefacción, ofreciendo servicios profesionales de instalación, reparación y mantenimiento.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="inicio"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="servicios"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="sobre-nosotros"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="opiniones"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Opiniones
                </Link>
              </li>
              <li>
                <Link
                  to="contacto"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 3 - Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Reparación de aire acondicionado</li>
              <li className="text-gray-400">Mantenimiento de climatización</li>
              <li className="text-gray-400">Instalación de aire acondicionado</li>
              <li className="text-gray-400">Reparación de calderas de gas</li>
              <li className="text-gray-400">Mantenimiento de calderas de gasóleo</li>
              <li className="text-gray-400">Revisión oficial de calderas</li>
            </ul>
          </div>
          
          {/* Columna 4 - Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">Mare de Deu de la Purificacio 26, 46900 Torrent, Valencia</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <a href="tel:+34663215621" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +34 663 215 621
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:ginesat24@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  ginesat24@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-sm text-gray-500">
              © {year} GineSAT Servicios. Todos los derechos reservados.
            </div>
            <div className="flex justify-start md:justify-end space-x-6">
              <a href="/aviso-legal" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Aviso Legal
              </a>
              <a href="/politica-privacidad" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="/cookies" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 