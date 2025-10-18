import React from "react";
import { FaCalendar, FaCheck, FaRocket } from "react-icons/fa6";

const Cta = () => {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-primary-blue via-primary-purple to-primary-green"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold font-inter text-white">
              Prêt à automatiser votre conformité ?
            </h2>
            <p className="text-xl text-white/90 font-manrope">
              Rejoignez plus de 1,200 entreprises qui font confiance à Normatic
              pour protéger leur activité numérique. Essai gratuit de 14 jours,
              sans engagement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-xl font-semibold font-inter hover:bg-gray-100 transition-colors shadow-lg">
              <div className="text-primary-blue">
                <FaRocket />
              </div>
              Commencer l&apos;essai gratuit
            </button>
            <button className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold font-inter hover:bg-white hover:text-primary-blue transition-all">
              <div className="text-white">
                <FaCalendar />
              </div>
              Réserver une démo
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-white/80 text-sm font-manrope">
            <div className="flex items-center space-x-2">
              <div className="text-white">
                <FaCheck />
              </div>
              <span>14 jours gratuits</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-white">
                <FaCheck />
              </div>
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-white">
                <FaCheck />
              </div>
              <span>Support expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
