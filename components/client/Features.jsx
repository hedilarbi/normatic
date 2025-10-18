import React from "react";
import { FaCheck, FaExclamation, FaWandMagicSparkles } from "react-icons/fa6";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Une solution complète pour votre
            <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              {" "}
              conformité
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-manrope max-w-3xl mx-auto">
            Automatisez la détection, la correction et le suivi de vos
            obligations réglementaires avec notre IA avancée
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center">
                <div className="border border-dotted border-primary-blue rounded-full p-1 text-primary-blue">
                  <FaExclamation />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  Scan automatisé 24/7
                </h3>
                <p className="text-gray-600 font-manrope">
                  Surveillance continue de vos sites web, applications et
                  documents pour détecter instantanément les non-conformités.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    Analyse en temps réel
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    Alertes instantanées
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    Historique complet
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center">
                <div className="text-primary-green">
                  <FaWandMagicSparkles />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  Corrections automatiques
                </h3>
                <p className="text-gray-600 font-manrope">
                  Notre IA génère et applique automatiquement les corrections
                  nécessaires pour maintenir votre conformité.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    Corrections intelligentes
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    Validation automatique
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    Déploiement sécurisé
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary-purple/10 rounded-xl flex items-center justify-center">
                <div className="border border-dotted border-primary-purple rounded-full p-1 text-primary-purple">
                  <FaExclamation />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  Conformité multi-réglementaire
                </h3>
                <p className="text-gray-600 font-manrope">
                  Couverture complète RGPD, WCAG, AI Act, DSA et DMA avec mise à
                  jour automatique des réglementations.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    5 réglementations couvertes
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    Mises à jour automatiques
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-primary-green">
                    <FaCheck />
                  </div>
                  <span className="text-sm font-inter text-gray-600">
                    Rapports détaillés
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
