// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestimoniosPage from './pages/TestimoniosPage';
import CasosExitoPage from './pages/CasosExitoPage';
import PoliticaCookies from './pages/politica-cookies';
import PrivPoli from './pages/PrivPoli';
import TermsOfService from './pages/TermsOfService';
import TeamPage from './pages/TeamPage';

import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonios" element={<TestimoniosPage />} />
          <Route path="/casos-de-exito" element={<CasosExitoPage />} />
          <Route path="/nosotros" element={<TeamPage />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/terminos-servicios" element={<TermsOfService />} />
          <Route path="/politica-privacidad" element={<PrivPoli />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;