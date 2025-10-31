import React from "react";
import { Star } from "lucide-react";
import konecta from "../../assets/clientes/konecta_circle.png";
import letis from "../../assets/clientes/letis_circle.png";
import unicaba from "../../assets/clientes/unicaba_circle.png";
import polobn from "../../assets/clientes/polobn.png";
import cimomet from "../../assets/clientes/cimomet.png";
import inta from "../../assets/clientes/inta_circle.png";

const SuccessBadge = () => {
  return (
    <div className="flex items-center gap-3 bg-sertic-dark/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-lg">
      {/* Logos */}
      <div className="flex -space-x-3">
        <img src={letis} className="w-10 h-10 bg-gradient-to-r from-sertic-cyan to-sertic-blue rounded-full border border-white/20" alt="letis" />
        <img src={unicaba} className="w-10 h-10 bg-gradient-to-r from-sertic-cyan to-sertic-blue rounded-full border border-white/20 object-cover" alt="polobn" />
        <img src={konecta} className="w-10 h-10 bg-gradient-to-r from-sertic-cyan to-sertic-blue rounded-full border border-white/20 object-cover" alt="cimomet" />
        <img src={inta} className="w-10 h-10 bg-gradient-to-r from-sertic-cyan to-sertic-blue rounded-full border border-white/20 object-cover" alt="inta" />
      </div>

      {/* Stars & text */}
      <div className="flex flex-col ml-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
          ))}
        </div>
        <span className="text-sm font-medium text-white/90">+50 casos de éxito</span>
      </div>
    </div>
  );
};

export default SuccessBadge;
