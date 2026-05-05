"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BrandLogo = ({ brand }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div className="flex h-12 w-full items-center justify-center rounded-xl border border-blue-100 bg-blue-50 px-3 text-center text-[10px] font-black leading-tight text-blue-800 uppercase tracking-tighter">
        {brand.name}
      </div>
    );
  }

  return (
    <img
      src={brand.logo}
      alt={brand.alt}
      className="h-10 w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: 'Leroy Merlin',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Leroy_Merlin_-_logo_%28France%2C_1995-%29.svg',
      alt: 'Leroy Merlin logo'
    },
    {
      id: 2,
      name: 'El Corte Inglés',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Logo_Corte_Ingl%C3%A9s.svg',
      alt: 'El Corte Inglés logo'
    },
    {
      id: 3,
      name: 'Daikin',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/DAIKIN_logo.svg',
      alt: 'Daikin logo'
    },
    {
      id: 4,
      name: 'Mitsubishi Electric',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Mitsubishi_Electric_logo.svg',
      alt: 'Mitsubishi Electric logo'
    },
    {
      id: 5,
      name: 'Carrier',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Logo_of_the_Carrier_Corporation.svg',
      alt: 'Carrier logo'
    },
    {
      id: 6,
      name: 'Bosch',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
      alt: 'Bosch logo'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Marcas de Confianza</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Servicio oficial y multimarca
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex items-center justify-center p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 border border-slate-100 h-32"
            >
              <BrandLogo brand={brand} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
