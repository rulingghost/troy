import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Journey from '../components/Journey';
import Services from '../components/Services';
import Contact from '../components/Contact';
import OrganizationContactForm from '../components/OrganizationContactForm';

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
      <OrganizationContactForm />
      <Contact />
    </main>
  );
};

export default Home;
