"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: 'Leroy Merlin',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Leroy_Merlin.svg/1200px-Leroy_Merlin.svg.png',
      alt: 'Leroy Merlin logo'
    },
    {
      id: 2,
      name: 'El Corte Inglés',
      logo: 'https://www.elcorteingles.es/recursos/informacioncorporativa/doc/portal/2017/07/06/eci-triangulo-logo.png',
      alt: 'El Corte Inglés logo'
    },
    {
      id: 3,
      name: 'Daikin',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/DAIKIN_logo.svg/2560px-DAIKIN_logo.svg.png',
      alt: 'Daikin logo'
    },
    {
      id: 4,
      name: 'Mitsubishi Electric',
      logo: 'https://bestech-group.com/wp-content/uploads/2024/06/mitsubishi-electric-en-best-technology-group.png',
      alt: 'Mitsubishi Electric logo'
    },
    {
      id: 5,
      name: 'Carrier',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_of_the_Carrier_Corporation.svg/2560px-Logo_of_the_Carrier_Corporation.svg.png',
      alt: 'Carrier logo'
    },
    {
      id: 6,
      name: 'Bosch',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Bosch_logo.png',
      alt: 'Bosch logo'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trabajamos con las mejores <span className="text-blue-600">marcas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Colaboramos con los principales distribuidores y fabricantes de climatización y calefacción para ofrecerte los mejores productos y servicios
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-32 h-16">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 128px) 100vw, 128px"
                  priority={index < 2}
                  onError={(e) => {
                    console.error(`Error loading image for ${brand.name}`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands; 