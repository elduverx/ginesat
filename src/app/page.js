import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import Brands from '../components/Brands';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Brands />
      <Testimonials />
      <ContactForm />
      <Location />
      <Footer />
    </main>
  );
}
