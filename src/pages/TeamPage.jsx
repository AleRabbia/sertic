import React, { useState, useRef, useEffect } from 'react';
import {
  Linkedin,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  X,
  Network,
  ArrowLeft
} from 'lucide-react';
import { teamMembers } from '../data/equipo';
import { Navigation, Footer } from '../components/layout';
import { useNavigate } from 'react-router-dom';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [nodePositions, setNodePositions] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const navigate = useNavigate();

  /* -------------------- MOBILE DETECTION -------------------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* -------------------- CONNECTIONS (ALL TO ALL) -------------------- 
  const connections = [];
  for (let i = 0; i < teamMembers.length; i++) {
    for (let j = i + 1; j < teamMembers.length; j++) {
      connections.push({
        from: teamMembers[i].id,
        to: teamMembers[j].id
      });
    }
  }*/

    /* -------------------- CONNECTIONS (SEMANTIC / ORGANIZATIONAL) -------------------- */
    const connections = [
      /* CEO → liderazgo directo */
      { from: 1, to: 7 }, // CEO → Project Manager (Digna)
      { from: 1, to: 5 }, // CEO → Administración (Melania)
      { from: 1, to: 6 }, // CEO → Cloud (Patricio)
      { from: 1, to: 3 }, // CEO → Infraestructura (Ramiro)
      { from: 1, to: 4 }, // CEO → Comercial (Alexis)

      /* Project Manager → ejecución */
      { from: 7, to: 2 }, // PM → DevOps (Nicolás)
      { from: 7, to: 3 }, // PM → Infraestructura (Ramiro)
      { from: 7, to: 8 }, // PM → HR (Francisco)

      /* Core técnico */
      { from: 3, to: 2 }, // Infraestructura ↔ DevOps
      { from: 3, to: 6 }, // Infraestructura ↔ Cloud
      { from: 6, to: 2 }, // Cloud ↔ DevOps

      /* Backoffice y negocio */
      { from: 5, to: 8 }, // Administración ↔ HR
      { from: 5, to: 4 }, // Administración ↔ Comercial

      /* Comercial → ejecución */
      { from: 4, to: 7 }  // Comercial ↔ Project Manager
    ];

  /* -------------------- NODE POSITIONS (DESKTOP ONLY) -------------------- */
  useEffect(() => {
    if (isMobile) return;

    const updatePositions = () => {
      const positions = {};
      const container = containerRef.current?.getBoundingClientRect();
      if (!container) return;

      teamMembers.forEach(member => {
        const el = document.getElementById(`node-${member.id}`);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        positions[member.id] = {
          x: rect.left + rect.width / 2 - container.left,
          y: rect.top + rect.height / 2 - container.top
        };
      });

      setNodePositions(positions);
    };

    updatePositions();
    const t = setTimeout(updatePositions, 100);
    window.addEventListener('resize', updatePositions);

    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', updatePositions);
    };
  }, [isMobile]);

  /* -------------------- HELPERS -------------------- */
  const getConnectedMembers = id =>
    connections
      .filter(c => c.from === id || c.to === id)
      .map(c => (c.from === id ? c.to : c.from));

  const isConnected = (a, b) =>
    connections.some(
      c =>
        (c.from === a && c.to === b) ||
        (c.from === b && c.to === a)
    );

  const activeId = selectedMember?.id || hoveredMember;
  const connectedIds = activeId ? getConnectedMembers(activeId) : [];

  /* ============================================================ */
  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-white overflow-hidden">
      <Navigation />

      <main className="pt-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-sertic-cyan/10 blur-3xl rounded-full" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-sertic-blue/10 blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* HEADER */}
          <button
                          onClick={() => navigate('/')}
                          className="flex items-center gap-2 text-sertic-cyan hover:text-sertic-light transition-colors mb-10 group"
                        >
                          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                          Volver
                        </button>

          {/* ================= MOBILE ================= */}
          {isMobile ? (
            <div className="space-y-4 pb-24">
              {teamMembers.map(m => (
                <div
                  key={m.id}
                  onClick={() => setSelectedMember(m)}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-sertic-cyan/50 transition"
                >
                  <div className="flex gap-4">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-20 h-20 rounded-xl object-cover border-2 border-sertic-cyan"
                    />
                    <div>
                      <h3 className="font-bold">{m.name}</h3>
                      <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-sertic-cyan to-sertic-blue text-sm font-semibold">
                        {m.role}
                      </span>
                      <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                        {m.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ================= DESKTOP ================= */
            <div ref={containerRef} className="relative min-h-[600px] mb-24">
              {/* SVG LINES */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineNormal" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#05ADEE" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#14739F" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="lineActive" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#05ADEE" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#14739F" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {connections.map((c, i) => {
                  const a = nodePositions[c.from];
                  const b = nodePositions[c.to];
                  if (!a || !b) return null;

                  const active = activeId && (c.from === activeId || c.to === activeId);
                  const offset = a.x === b.x ? 48 : 0;
                  return (
                    <line
                          key={i}
                          x1={a.x + offset}
                          y1={a.y}
                          x2={b.x + offset}
                          y2={b.y}
                          stroke={active ? 'url(#lineActive)' : 'url(#lineNormal)'}
                          strokeWidth={active ? 3 : 1.5}
                        />
                  );
                })}
              </svg>

              {/* NODES */}
              <div className="grid grid-cols-3 gap-x-16 gap-y-12 max-w-5xl mx-auto py-12">
                {teamMembers.map(m => {
                  const isActive = activeId === m.id;
                  const isConnectedToActive = connectedIds.includes(m.id);
                  const dim = activeId && !isActive && !isConnectedToActive;

                  return (
                    <div
                      key={m.id}
                      id={`node-${m.id}`}
                      style={{
                        gridColumn: m.gridPosition.col,
                        gridRow: m.gridPosition.row
                      }}
                      className={`flex flex-col items-center transition ${
                        dim ? 'opacity-30' : ''
                      }`}
                      onMouseEnter={() => setHoveredMember(m.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                      onClick={() => setSelectedMember(m)}
                    >
                      <div className="relative group cursor-pointer">
                        {/* GLOW */}
                        <div
                          className={`absolute inset-0 rounded-full blur-2xl transition ${
                            isActive
                              ? 'bg-sertic-cyan/40 scale-150'
                              : 'bg-sertic-cyan/0 group-hover:bg-sertic-cyan/20 scale-125'
                          }`}
                        />

                        {/* AVATAR */}
                        <div
                          className={`relative w-32 h-32 rounded-full p-1 transition ${
                            isActive ? 'scale-110' : 'group-hover:scale-105'
                          } bg-gradient-to-r from-sertic-cyan to-sertic-blue`}
                        >
                          <img
                            src={m.photo}
                            alt={m.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>

                        <div className="mt-4 text-center">
                          <h3 className="font-bold">{m.name}</h3>
                          <span className="inline-block mt-1 px-4 py-1 rounded-full bg-sertic-blue text-sm font-semibold">
                            {m.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= MODAL ================= */}
          {selectedMember && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <div
                onClick={e => e.stopPropagation()}
                className="bg-gradient-to-br from-sertic-dark to-black max-w-2xl w-full rounded-3xl border border-sertic-cyan/30 p-8 relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 bg-white/10 p-2 rounded-full"
                >
                  <X />
                </button>

                <div className="flex gap-6 mb-6">
                  <img
                    src={selectedMember.photo}
                    className="w-32 h-32 rounded-2xl border-4 border-sertic-cyan"
                  />
                  <div>
                    <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                    <span className="inline-block mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-sertic-cyan to-sertic-blue font-bold">
                      {selectedMember.role}
                    </span>
                    <p className="mt-4 text-gray-300">{selectedMember.bio}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <Briefcase className="text-sertic-cyan mb-2" />
                    <p className="font-bold">{selectedMember.experience}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <GraduationCap className="text-sertic-blue mb-2" />
                    <p className="font-bold">{selectedMember.education}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Award /> Logros
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.achievements.map((a, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-sertic-cyan/20 border border-sertic-cyan/30 text-sm"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-sertic-cyan/20 border border-sertic-cyan"
                  >
                    <Linkedin /> LinkedIn
                  </a>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-sertic-blue/20 border border-sertic-blue"
                  >
                    <Mail /> Email
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
