// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const TestimoniosPage = lazy(() => import('./pages/TestimoniosPage'));
const CasosExitoPage = lazy(() => import('./pages/CasosExitoPage'));
const PoliticaCookies = lazy(() => import('./pages/politica-cookies'));
const PrivPoli = lazy(() => import('./pages/PrivPoli'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/:slug" element={<ServiceDetail />} />
            <Route path="/testimonios" element={<TestimoniosPage />} />
            <Route path="/casos-de-exito" element={<CasosExitoPage />} />
            <Route path="/nosotros" element={<TeamPage />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="/terminos-servicios" element={<TermsOfService />} />
            <Route path="/politica-privacidad" element={<PrivPoli />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;