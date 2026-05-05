"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'inicio', name: 'Inicio' },
    { id: 'servicios', name: 'Servicios' },
    { id: 'sobre-nosotros', name: 'Nosotros' },
    { id: 'opiniones', name: 'Opiniones' },
    { id: 'contacto', name: 'Contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollPosition > 20 ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="relative h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo_transparente.png"
                alt="GineSAT"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-xl md:text-2xl font-black tracking-tighter ${scrollPosition > 20 ? 'text-blue-900' : 'text-blue-800'}`}>
                Gine<span className="text-orange-500">SAT</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Servicios</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-600 after:w-full"
                className="relative cursor-pointer px-4 py-2 text-gray-700 font-bold text-sm hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+34663215621"
              className="ml-6 bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-2 active:scale-95"
            >
              <FaPhoneAlt size={12} />
              Llámanos
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleClick}
              className={`p-2 rounded-lg transition-colors ${scrollPosition > 20 ? 'text-gray-900 hover:bg-gray-100' : 'text-blue-900 hover:bg-white/20'}`}
              aria-label="Toggle Menu"
            >
              {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[60] md:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <div className="flex items-center gap-2">
                  <Image src="/logo_transparente.png" alt="GineSAT" width={32} height={32} />
                  <span className="text-xl font-black text-blue-900">Gine<span className="text-orange-500">SAT</span></span>
                </div>
                <button onClick={closeMenu} className="p-2 text-gray-500"><FaTimes size={20} /></button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    onClick={closeMenu}
                    className="block px-4 py-4 text-lg font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t bg-gray-50">
                <a
                  href="tel:+34663215621"
                  className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-4 rounded-xl font-black shadow-lg shadow-blue-200 active:scale-95 transition-transform"
                >
                  <FaPhoneAlt />
                  Llamar ahora
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 
