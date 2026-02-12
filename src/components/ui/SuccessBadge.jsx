import React, { useState } from "react";
import { Star } from "lucide-react";
import konecta from "../../assets/clientes/konecta_circle.png";
import letis from "../../assets/clientes/letis_circle.png";
import unicaba from "../../assets/clientes/unicaba_circle.png";
import polobn from "../../assets/clientes/polobn.png";
import cimomet from "../../assets/clientes/cimomet.png";
import inta from "../../assets/clientes/inta_circle.png";

const SuccessBadge = ({ onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div 
        onClick={onClick}
        className="flex items-center gap-3 px-8 py-3 rounded-full border border-sertic-cyan/50 hover:border-sertic-cyan hover:bg-sertic-cyan/10 backdrop-blur-md shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer h-[60px]"
      >
        {/* Logos */}
        <div className="flex -space-x-3">
          <img loading="lazy" src={letis} className="w-9 h-9 bg-gradient-to-r from-sertic-cyan to-sertic-blue rounded-full border border-white/20" alt="letis" />
          <img loading="lazy" src={unicaba} className="w-9 h-9 bg-gradient-to-r from-sertic-cyan to-sertic-blue rounded-full border border-white/20 object-cover" alt="polobn" />
          <img loading="lazy" src={konecta} className="w-9 h-9 bg-gradient-to-r from-sertic-cyan to-sertic-blue rounded-full border border-white/20 object-cover" alt="cimomet" />
          <img loading="lazy" src={inta} className="w-9 h-9 bg-gradient-to-r from-sertic-cyan to-sertic-blue rounded-full border border-white/20 object-cover" alt="inta" />
        </div>

        {/* Stars & text */}
        <div className="flex flex-col ml-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-white/90">+50 casos de éxito</span>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-sertic-dark/95 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg border border-sertic-cyan/30 whitespace-nowrap shadow-xl z-50 animate-fade-in">
          Ver casos de éxito principales
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-sertic-dark/95 border-l border-t border-sertic-cyan/30 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default SuccessBadge;