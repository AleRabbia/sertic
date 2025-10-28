import React from 'react';
import { 
  Navigation, 
  Footer 
} from '../components/layout';
import Chatbot from '../components/ui/ChatBox';
import {
  HeroCarousel,
  Hero,
  Stats,
  Services,
  About,
  Testimonials,
  Contact,
  CasosExito,
  CasosExitoPreview,
  TestimonialsPreview,
  Technologies,
  Memberships,
  ContactInternational
} from '../components/sections';
import ConsentBanner from '../components/privacity/ConsentBanner';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-sertic-white overflow-hidden">
    {/*<div className="min-h-screen bg-gradient-to-br from-sertic-dark via-sertic-black to-sertic-dark text-sertic-white overflow-hidden">*/}
    {/* <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-dark text-sertic-white overflow-hidden"> */}
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        { /*<Technologies />*/}
        <Memberships />        
        {/* <CasosExitoPreview/> */}
        <About />
        {/* <TestimonialsPreview /> */}
        <Contact />        
      </main>
      <Footer />
      <Chatbot />
      <ConsentBanner />
    </div>
  );
};

export default Home;