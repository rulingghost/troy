import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Services from '../components/Services';
import Journey from '../components/Journey';
import References from '../components/References';
import Testimonials from '../components/Testimonials';
import OrganizationContactForm from '../components/OrganizationContactForm';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <AboutPreview />
      <Services />
      <Journey />
      <References />
      <Testimonials />
      <OrganizationContactForm />
      <Contact />
    </main>
  );
};

export default Home;
