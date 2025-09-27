import React from "react";
import {
  FaCircleCheck,
  FaExclamation,
  FaPlay,
  FaRocket,
  FaTriangleExclamation,
} from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-medium font-inter">
                <div className="border border-primary-blue rounded-full p-1 border-dotted text-primary-blue">
                  <FaExclamation />
                </div>
                <span>Automatisation IA avancée</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold font-inter text-primary-dark leading-tight">
                Conformité réglementaire
                <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                  {" "}
                  automatisée
                </span>
              </h1>

              <p className="text-xl text-gray-600 font-manrope leading-relaxed">
                Normatic détecte et corrige automatiquement les non-conformités
                RGPD, WCAG, AI Act, DSA et DMA. Protégez votre entreprise avec
                une surveillance continue et des corrections en temps réel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className=" flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-xl font-semibold font-inter hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg">
                <div className="text-white">
                  <FaRocket />
                </div>
                Commencer gratuitement
              </button>
              <button className="flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold font-inter hover:border-primary-blue hover:text-primary-blue transition-all">
                <div>
                  <FaPlay />
                </div>
                Voir la démo
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="text-primary-green">
                  <FaCircleCheck />
                </div>
                <span className="text-sm font-medium font-inter text-gray-600">
                  Scan en temps réel
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-primary-green">
                  <FaCircleCheck />
                </div>
                <span className="text-sm font-medium font-inter text-gray-600">
                  Corrections automatiques
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-primary-green">
                  <FaCircleCheck />
                </div>
                <span className="text-sm font-medium font-inter text-gray-600">
                  Conformité garantie
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold font-inter text-primary-dark">
                    Dashboard Conformité
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                    <span className="text-sm text-gray-500 font-inter">
                      En ligne
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-green/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary-green font-inter">
                      98%
                    </div>
                    <div className="text-sm text-gray-600 font-manrope">
                      RGPD
                    </div>
                  </div>
                  <div className="bg-primary-blue/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary-blue font-inter">
                      94%
                    </div>
                    <div className="text-sm text-gray-600 font-manrope">
                      WCAG
                    </div>
                  </div>
                  <div className="bg-primary-purple/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary-purple font-inter">
                      96%
                    </div>
                    <div className="text-sm text-gray-600 font-manrope">
                      AI Act
                    </div>
                  </div>
                  <div className="bg-primary-orange/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-primary-orange font-inter">
                      92%
                    </div>
                    <div className="text-sm text-gray-600 font-manrope">
                      DSA/DMA
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary-orange">
                        <FaTriangleExclamation />
                      </div>
                      <span className="text-sm font-medium font-inter text-black">
                        Cookie non conforme détecté
                      </span>
                    </div>
                    <button className="text-xs bg-primary-blue text-white px-3 py-1 rounded-full font-inter">
                      Corriger
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary-green">
                        <FaCircleCheck />
                      </div>
                      <span className="text-sm font-medium font-inter text-black">
                        Contraste amélioré
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-inter">
                      Corrigé
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
