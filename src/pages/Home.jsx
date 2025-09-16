import React from 'react';
import { 
  Navigation, 
  Footer 
} from '../components/layout';
import Chatbot from '../components/ui/ChatBox';
import {
  Hero,
  Stats,
  Services,
  About,
  Testimonials,
  Contact,
  CasosExito
} from '../components/sections';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <CasosExito />
        <Contact />        
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;
