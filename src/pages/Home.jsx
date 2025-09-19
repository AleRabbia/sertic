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
  CasosExito,
  CasosExitoPreview,
  TestimonialsPreview
} from '../components/sections';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <CasosExitoPreview/>
        <About />
        <TestimonialsPreview />
        <Contact />        
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;
