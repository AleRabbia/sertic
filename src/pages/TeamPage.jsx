import React, { useState, useRef, useEffect } from 'react';
import { Linkedin, Mail, Award, Briefcase, GraduationCap, X, Network, ArrowLeft } from 'lucide-react';
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

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Calcular posiciones reales de los nodos (solo en desktop)
  useEffect(() => {
    if (isMobile) return;

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
    const timeoutId = setTimeout(updatePositions, 100);
    window.addEventListener('resize', updatePositions);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePositions);
    };
  }, [isMobile]);

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

          {/* MOBILE VIEW - Lista vertical simple */}
          {isMobile ? (
            <div className="space-y-4 pb-20">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => handleMemberClick(member)}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-sertic-cyan/50 transition-all cursor-pointer active:scale-98"
                >
                  <div className="flex items-center gap-4">
                    {/* Photo */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-sertic-cyan shadow-lg flex-shrink-0">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1 truncate">
                        {member.name}
                      </h3>
                      <div className="inline-block bg-gradient-to-r from-sertic-cyan to-sertic-blue px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {member.role}
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* DESKTOP VIEW - Red con conexiones */
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
              <div className="grid grid-cols-3 gap-x-16 gap-y-12 max-w-5xl mx-auto py-12">
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
                          isActive 
                            ? 'scale-110' 
                            : isConnectedToActive
                            ? 'scale-105'
                            : 'group-hover:scale-105'
                        }`}>
                          {/* Glow effect */}
                          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                            isActive 
                              ? 'bg-sertic-cyan/40 blur-2xl scale-150' 
                              : isConnectedToActive
                              ? 'bg-sertic-blue/30 blur-xl scale-125'
                              : 'bg-sertic-cyan/0 group-hover:bg-sertic-cyan/20 blur-xl group-hover:scale-125'
                          }`}></div>
                          
                          {/* Avatar ring */}
                          <div className={`relative w-32 h-32 rounded-full p-1 transition-all duration-500 ${
                            isActive 
                              ? 'bg-gradient-to-r from-sertic-cyan via-sertic-blue to-sertic-cyan animate-pulse' 
                              : isConnectedToActive
                              ? 'bg-gradient-to-r from-sertic-blue to-sertic-cyan'
                              : 'bg-gradient-to-r from-sertic-cyan/50 to-sertic-blue/50 group-hover:from-sertic-cyan group-hover:to-sertic-blue'
                          }`}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-sertic-dark border-2 border-sertic-dark">
                              <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </div>

                          {/* Pulse ring on active */}
                          {isActive && (
                            <div className="absolute inset-0 rounded-full border-4 border-sertic-cyan animate-ping opacity-75"></div>
                          )}
                        </div>

                        {/* Name and role */}
                        <div className="mt-4 text-center">
                          <h3 className={`text-lg font-bold mb-2 transition-all duration-300 ${
                            isActive 
                              ? 'text-sertic-cyan scale-105' 
                              : isConnectedToActive
                              ? 'text-white'
                              : 'text-white group-hover:text-sertic-cyan'
                          }`}>
                            {member.name}
                          </h3>
                          <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
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
          )}

          {/* Detailed Info Panel - Modal Style */}
          {selectedMember && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <div 
                className="bg-gradient-to-br from-sertic-dark/98 to-sertic-black/98 backdrop-blur-xl rounded-3xl max-w-2xl w-full shadow-2xl border border-sertic-cyan/30 relative overflow-hidden max-h-[90vh] overflow-y-auto"
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

                <div className="p-6 md:p-8">
                  {/* Header with photo */}
                  <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-sertic-cyan shadow-2xl flex-shrink-0 mx-auto md:mx-0">
                      <img
                        src={selectedMember.photo}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                      <div className="inline-block bg-gradient-to-r from-sertic-cyan to-sertic-blue px-4 py-2 rounded-full text-lg font-bold mb-4">
                        {selectedMember.role}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
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
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sertic-blue flex-shrink-0">
                              <img
                                src={connectedMember.photo}
                                alt={connectedMember.name}
                                className="w-full h-full object-cover"
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
                  <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="bg-gradient-to-r from-sertic-cyan/10 to-sertic-blue/10 rounded-3xl p-8 md:p-12 border border-sertic-cyan/20 backdrop-blur-sm max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                ¿Quieres formar parte del equipo?
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-8">
                Siempre estamos buscando talento apasionado por la tecnología
              </p>
              <button className="bg-gradient-to-r from-sertic-cyan to-sertic-blue hover:from-sertic-blue hover:to-sertic-cyan px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
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