"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
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
      rating: 4,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FaStar 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="opiniones" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lo que dicen nuestros <span className="text-blue-600">clientes</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Ofrecemos soluciones de calidad avaladas por la satisfacción de nuestros clientes.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-blue-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 64px) 100vw, 64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <FaQuoteLeft className="h-10 w-10 text-blue-100 absolute -top-4 -left-2" />
                    <p className="text-gray-700 text-lg relative z-10 pl-5">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-between w-full px-4">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 focus:outline-none transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 mx-1 rounded-full transition-colors ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 