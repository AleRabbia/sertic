import React from "react";
import LogoMarquee from "../ui/LogoMarquee";
import { clientLogos } from "../../data/clientLogos";

const ClientsMarquee = () => {
  return (
    <>
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
          Confían en nosotros
        </h2>
        <p className="text-gray-400 mt-2">
          Aliados IT
        </p>
      </div>

      <LogoMarquee items={clientLogos} speed={45} />
    </>
  );
};
export default ClientsMarquee;
