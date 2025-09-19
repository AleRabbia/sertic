// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestimoniosPage from './pages/TestimoniosPage';
import CasosExitoPage from './pages/CasosExitoPage';
import PoliticaCookies from './pages/politica-cookies';

import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonios" element={<TestimoniosPage />} />
          <Route path="/casos-de-exito" element={<CasosExitoPage />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;