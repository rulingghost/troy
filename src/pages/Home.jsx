import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Journey from '../components/Journey';
import Services from '../components/Services';
import References from '../components/References';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <AboutPreview />
      <Journey />
      <Services />
      <References />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
