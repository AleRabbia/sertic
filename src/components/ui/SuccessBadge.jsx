import React from "react";
import { Star } from "lucide-react";
import konecta from "../../assets/clientes/konecta.png";
import letis from "../../assets/clientes/letis.png";
import unicaba from "../../assets/clientes/unicaba.png";
import polobn from "../../assets/clientes/polobn.png";
import cimomet from "../../assets/clientes/cimomet.png";
import inta from "../../assets/clientes/inta.png";

const SuccessBadge = () => {
  return (
    <div className="flex items-center gap-3 bg-sertic-dark/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-lg">
      {/* Logos */}
      <div className="flex -space-x-3">
        <img src={letis} className="w-10 h-10 rounded-full border border-white/20" alt="letis" />
        <img src={polobn} className="w-10 h-10 rounded-full border border-white/20" alt="polobn" />
        <img src={cimomet} className="w-10 h-10 rounded-full border border-white/20" alt="cimomet" />
        <img src={inta} className="w-10 h-10 rounded-full border border-white/20" alt="inta" />
      </div>

      {/* Stars & text */}
      <div className="flex flex-col ml-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm font-medium text-white/90">+50 casos de éxito</span>
      </div>
    </div>
  );
};

export default SuccessBadge;
