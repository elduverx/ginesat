"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const phone = '34663215621';
const message = encodeURIComponent('Hola, quiero solicitar informacion sobre vuestros servicios.');

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <FaWhatsapp className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
