"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de envío de formulario
    // En un caso real, aquí iría la lógica de envío a un servidor/API
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo lo antes posible.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      id: 1,
      title: 'Teléfono',
      value: '+34 663 215 621',
      icon: <FaPhone className="h-5 w-5 text-blue-600" />,
      href: 'tel:+34663215621'
    },
    {
      id: 2,
      title: 'Email',
      value: 'ginesat24@gmail.com',
      icon: <FaEnvelope className="h-5 w-5 text-blue-600" />,
      href: 'mailto:ginesat24@gmail.com'
    },
    {
      id: 3,
      title: 'Dirección',
      value: 'Mare de Deu de la Purificacio 26, 46900 Torrent, Valencia',
      icon: <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />,
      href: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contacta con <span className="text-blue-600">nosotros</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Estamos aquí para ayudarte. Rellena el siguiente formulario y te responderemos lo antes posible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h3>
            
            {formStatus.submitted && (
              <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="600 000 000"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Servicio requerido *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="aire-acondicionado">Aire Acondicionado</option>
                    <option value="caldera-gas">Caldera de Gas</option>
                    <option value="caldera-gasoleo">Caldera de Gasóleo</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe brevemente lo que necesitas"
                  required
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de contacto</h3>
              <p className="text-gray-600 mb-8">
                Puede contactarnos directamente o visitarnos en nuestras oficinas durante el horario laboral. También puede rellenar el formulario y nos pondremos en contacto con usted lo antes posible.
              </p>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <a 
                    key={item.id}
                    href={item.href}
                    className="flex items-start hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 shadow-inner">
              <h4 className="font-semibold text-gray-800 mb-2">Horario de atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes:</span>
                  <span className="font-medium">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábados:</span>
                  <span className="font-medium">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
                <div className="pt-2 mt-2 border-t border-blue-100">
                  <p className="text-sm text-gray-600">
                    Contacta con nosotros durante el horario laboral para obtener la mejor atención.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 