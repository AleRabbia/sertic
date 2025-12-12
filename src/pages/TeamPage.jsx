import React, { useState, useRef, useEffect } from 'react';
import { Linkedin, Mail, Award, Briefcase, GraduationCap, X, Network, ArrowLeft } from 'lucide-react';
import { teamMembers } from '../data/equipo';
import { Navigation, Footer } from '../components/layout';
import { useNavigate } from 'react-router-dom';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [nodePositions, setNodePositions] = useState({});
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Generar todas las conexiones posibles (cada nodo con todos los demás)
  const connections = [];
  for (let i = 0; i < teamMembers.length; i++) {
    for (let j = i + 1; j < teamMembers.length; j++) {
      connections.push({ 
        from: teamMembers[i].id, 
        to: teamMembers[j].id 
      });
    }
  }

  // Calcular posiciones reales de los nodos
  useEffect(() => {
    const updatePositions = () => {
      const positions = {};
      teamMembers.forEach(member => {
        const element = document.getElementById(`node-${member.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const container = containerRef.current?.getBoundingClientRect();
          if (container) {
            positions[member.id] = {
              x: rect.left + rect.width / 2 - container.left,
              y: rect.top + rect.height / 2 - container.top
            };
          }
        }
      });
      setNodePositions(positions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  const getConnectedMembers = (memberId) => {
    const connected = [];
    connections.forEach(conn => {
      if (conn.from === memberId) connected.push(conn.to);
      if (conn.to === memberId) connected.push(conn.from);
    });
    return connected;
  };

  const isConnected = (member1Id, member2Id) => {
    return connections.some(
      conn => (conn.from === member1Id && conn.to === member2Id) || 
              (conn.to === member1Id && conn.from === member2Id)
    );
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleNodeNavigation = (memberId) => {
    const member = teamMembers.find(m => m.id === memberId);
    setSelectedMember(member);
  };

  const activeMember = selectedMember?.id || hoveredMember;
  const connectedIds = activeMember ? getConnectedMembers(activeMember) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-sertic-white overflow-hidden">
      <Navigation />
      
      <main className="pt-24">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-sertic-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-sertic-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
                      <button 
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                        Volver
                      </button>
                    </div>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profesionales conectados, trabajando en sinergia para tu éxito
            </p>
          </div>

          {/* Team Network Container */}
          <div ref={containerRef} className="relative w-full min-h-[600px] mb-20">
            {/* SVG Canvas para las líneas */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '600px' }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#05ADEE" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#14739F" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineGradientActive" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#05ADEE" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#14739F" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {connections.map((conn, index) => {
                const fromPos = nodePositions[conn.from];
                const toPos = nodePositions[conn.to];
                
                if (!fromPos || !toPos) return null;

                const isActive = activeMember && (conn.from === activeMember || conn.to === activeMember);
                
                return (
                  <line
                    key={index}
                    x1={fromPos.x}
                    y1={fromPos.y}
                    x2={toPos.x}
                    y2={toPos.y}
                    stroke={isActive ? "url(#lineGradientActive)" : "url(#lineGradient)"}
                    strokeWidth={isActive ? "3" : "1.5"}
                    className="transition-all duration-300"
                    style={{
                      filter: isActive ? 'drop-shadow(0 0 8px rgba(5, 173, 238, 0.6))' : 'none'
                    }}
                  />
                );
              })}
            </svg>

            {/* Grid de miembros del equipo */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-16 md:gap-y-24 max-w-5xl mx-auto py-12">
              {teamMembers.map((member) => {
                const isActive = activeMember === member.id;
                const isConnectedToActive = activeMember && connectedIds.includes(member.id);
                const isDimmed = activeMember && !isActive && !isConnectedToActive;

                return (
                  <div
                    key={member.id}
                    id={`node-${member.id}`}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      isDimmed ? 'opacity-30' : 'opacity-100'
                    }`}
                    style={{
                      gridColumn: member.gridPosition.col,
                      gridRow: member.gridPosition.row,
                      zIndex: isActive ? 50 : 10
                    }}
                    onMouseEnter={() => setHoveredMember(member.id)}
                    onMouseLeave={() => setHoveredMember(null)}
                    onClick={() => handleMemberClick(member)}
                  >
                    {/* Member Node */}
                    <div className="relative group cursor-pointer">
                      <div className={`relative transition-all duration-500 ${
                        isActive ? 'scale-125' : isConnectedToActive ? 'scale-110' : 'scale-100'
                      }`}>
                        <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                          isActive
                            ? 'border-sertic-cyan shadow-2xl shadow-sertic-cyan/70' 
                            : isConnectedToActive
                            ? 'border-sertic-blue shadow-xl shadow-sertic-blue/50'
                            : 'border-sertic-blue/30 shadow-lg'
                        }`}>
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                        {/* Pulse effect */}
                        {isActive && (
                          <>
                            <div className="absolute inset-0 rounded-full border-2 border-sertic-cyan animate-ping opacity-75"></div>
                            <div className="absolute inset-0 rounded-full bg-sertic-cyan/20 animate-pulse"></div>
                          </>
                        )}

                        {/* Connection indicator */}
                        {isConnectedToActive && !isActive && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-sertic-blue rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>

                      {/* Name and Role */}
                      <div className="mt-6 text-center">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{member.name}</h3>
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-sertic-cyan to-sertic-blue scale-110' 
                            : isConnectedToActive
                            ? 'bg-sertic-blue'
                            : 'bg-gradient-to-r from-sertic-cyan to-sertic-blue'
                        }`}>
                          {member.role}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Info Panel - Modal Style */}
          {selectedMember && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <div 
                className="bg-gradient-to-br from-sertic-dark/98 to-sertic-black/98 backdrop-blur-xl rounded-3xl max-w-2xl w-full shadow-2xl border border-sertic-cyan/30 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sertic-cyan to-sertic-blue"></div>

                {/* Close button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="p-8">
                  {/* Header with photo */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-sertic-cyan shadow-2xl flex-shrink-0">
                      <img
                        src={selectedMember.photo}
                        alt={selectedMember.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                      <div className="inline-block bg-gradient-to-r from-sertic-cyan to-sertic-blue px-4 py-2 rounded-full text-lg font-bold mb-4">
                        {selectedMember.role}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-sertic-cyan" />
                        <span className="text-sertic-cyan font-semibold">Experiencia</span>
                      </div>
                      <p className="text-white text-lg font-bold">{selectedMember.experience}</p>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="w-5 h-5 text-sertic-blue" />
                        <span className="text-sertic-blue font-semibold">Educación</span>
                      </div>
                      <p className="text-white text-lg font-bold">{selectedMember.education}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-sertic-cyan" />
                      <h3 className="text-xl font-bold text-white">Logros y Certificaciones</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="bg-sertic-cyan/20 px-4 py-2 rounded-full text-sm border border-sertic-cyan/30 text-sertic-cyan"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connected Members Navigation */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Network className="w-5 h-5 text-sertic-blue" />
                      <h3 className="text-xl font-bold text-white">Conexiones del Equipo</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {teamMembers
                        .filter(m => m.id !== selectedMember.id && isConnected(selectedMember.id, m.id))
                        .map((connectedMember) => (
                          <button
                            key={connectedMember.id}
                            onClick={() => handleNodeNavigation(connectedMember.id)}
                            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/10 hover:border-sertic-blue/50 transition-all"
                          >
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sertic-blue">
                              <img
                                src={connectedMember.photo}
                                alt={connectedMember.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="text-left">
                              <p className="text-white font-semibold text-sm group-hover:text-sertic-cyan transition-colors">
                                {connectedMember.name}
                              </p>
                              <p className="text-gray-400 text-xs">{connectedMember.role}</p>
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>

                  {/* Contact buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-sertic-cyan/20 hover:bg-sertic-cyan/30 border border-sertic-cyan/50 p-4 rounded-xl transition-colors flex items-center justify-center gap-2 font-semibold text-sertic-cyan"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex-1 bg-sertic-blue/20 hover:bg-sertic-blue/30 border border-sertic-blue/50 p-4 rounded-xl transition-colors flex items-center justify-center gap-2 font-semibold text-sertic-blue"
                    >
                      <Mail className="w-5 h-5" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center pb-20">
            <div className="bg-gradient-to-r from-sertic-cyan/10 to-sertic-blue/10 rounded-3xl p-12 border border-sertic-cyan/20 backdrop-blur-sm max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Quieres formar parte del equipo?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Siempre estamos buscando talento apasionado por la tecnología
              </p>
              <button className="bg-gradient-to-r from-sertic-cyan to-sertic-blue hover:from-sertic-blue hover:to-sertic-cyan px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
                Ver oportunidades
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamPage;