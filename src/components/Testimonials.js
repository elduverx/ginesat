"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Antonio García',
      position: 'Propietario de restaurante',
      testimonial: 'Excelente servicio de reparación de aire acondicionado. Resolvieron el problema de nuestro sistema en el restaurante rápidamente y sin interrumpir el servicio a los clientes. Muy profesionales.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
      rating: 5,
    },
    {
      id: 2,
      name: 'María Rodríguez',
      position: 'Propietaria de vivienda',
      testimonial: 'Instalaron nuestra caldera de gas con mucha profesionalidad. Me explicaron todo el funcionamiento y me dieron consejos de mantenimiento. El sistema funciona perfectamente desde hace más de un año.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
      rating: 5,
    },
    {
      id: 3,
      name: 'Pedro Martínez',
      position: 'Gerente de oficinas',
      testimonial: 'Contratamos el mantenimiento anual de nuestros sistemas de climatización en las oficinas. Siempre son puntuales, eficientes y dejan todo impecable. Gracias a ellos hemos evitado varias averías graves.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="opiniones" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Testimonios Reales</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
            La confianza de nuestros <span className="text-blue-600">Clientes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Nuestra mejor garantía es la satisfacción de quienes ya han confiado en nuestros técnicos.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100 shadow-2xl p-8 md:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`h-6 w-6 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>

                <div className="relative mb-10">
                  <FaQuoteLeft className="h-12 w-12 text-blue-600/10 absolute -top-6 -left-8" />
                  <p className="text-xl md:text-2xl font-bold text-gray-800 italic leading-relaxed relative z-10">
                    "{testimonials[activeIndex].testimonial}"
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative h-20 w-20 mb-4">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{testimonials[activeIndex].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="h-14 w-14 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-blue-100 transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="h-14 w-14 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-blue-100 transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
