"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

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
    { id: 'sobre-nosotros', name: 'Sobre Nosotros' },
    { id: 'opiniones', name: 'Opiniones' },
    { id: 'contacto', name: 'Contacto' },
    { id: 'ubicacion', name: 'Ubicación' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              Gine<span className="text-orange-500">SAT</span>
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-blue-600 font-bold"
                  className="cursor-pointer hover:text-blue-600 px-3 py-2 text-gray-700 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+34663215621"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ml-4"
              >
                Llámanos
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${nav ? 'flex' : 'hidden'} md:hidden flex-col bg-white w-full absolute top-20 left-0 z-10 shadow-lg`}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            spy={true}
            onClick={closeMenu}
            className="cursor-pointer hover:bg-gray-100 px-5 py-3 text-gray-700 border-b border-gray-100"
          >
            {item.name}
          </Link>
        ))}
        <a
          href="tel:+34663215621"
          className="bg-blue-600 text-white px-5 py-3 text-center hover:bg-blue-700"
        >
          Llámanos
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 