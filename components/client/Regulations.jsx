import React from "react";
import { FaBalanceScale } from "react-icons/fa";
import { FaGlobe, FaPlus, FaRobot, FaUserShield } from "react-icons/fa6";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

const Regulations = () => {
  return (
    <section id="regulations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Toutes les réglementations européennes
            <span className="bg-gradient-to-r from-primary-purple to-primary-orange bg-clip-text text-transparent">
              {" "}
              en une seule plateforme
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-manrope max-w-3xl mx-auto">
            Restez conforme avec les dernières exigences réglementaires grâce à
            notre expertise juridique et technologique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 p-6 rounded-2xl hover:from-primary-blue/10 hover:to-primary-blue/20 transition-all border border-primary-blue/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center">
                  <div className="text-white"></div>
                  <FaUserShield />
                </div>
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  RGPD
                </h3>
              </div>
              <p className="text-gray-600 font-manrope">
                Règlement Général sur la Protection des Données - Gestion
                automatisée des cookies, consentements et données personnelles.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-jetbrains text-primary-blue">
                  ✓ Gestion des cookies
                </div>
                <div className="text-sm font-jetbrains text-primary-blue">
                  ✓ Formulaires de consentement
                </div>
                <div className="text-sm font-jetbrains text-primary-blue">
                  ✓ Politique de confidentialité
                </div>
                <div className="text-sm font-jetbrains text-primary-blue">
                  ✓ Droit à l&apos;oubli
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-primary-green/5 to-primary-green/10 p-6 rounded-2xl hover:from-primary-green/10 hover:to-primary-green/20 transition-all border border-primary-green/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-green rounded-xl flex items-center justify-center">
                  <div className="bg-white text-primary-green rounded-full p-1">
                    <PiPersonArmsSpreadFill />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  WCAG 2.1
                </h3>
              </div>
              <p className="text-gray-600 font-manrope">
                Web Content Accessibility Guidelines - Accessibilité numérique
                pour tous les utilisateurs, y compris les personnes handicapées.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-jetbrains text-primary-green">
                  ✓ Contraste des couleurs
                </div>
                <div className="text-sm font-jetbrains text-primary-green">
                  ✓ Navigation clavier
                </div>
                <div className="text-sm font-jetbrains text-primary-green">
                  ✓ Textes alternatifs
                </div>
                <div className="text-sm font-jetbrains text-primary-green">
                  ✓ Structure sémantique
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-primary-purple/5 to-primary-purple/10 p-6 rounded-2xl hover:from-primary-purple/10 hover:to-primary-purple/20 transition-all border border-primary-purple/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-purple rounded-xl flex items-center justify-center">
                  <div className="text-white">
                    <FaRobot />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  AI Act
                </h3>
              </div>
              <p className="text-gray-600 font-manrope">
                Réglementation européenne sur l&apos;IA - Conformité des
                systèmes d&apos;intelligence artificielle selon les niveaux de
                risque.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-jetbrains text-primary-purple">
                  ✓ Classification des risques
                </div>
                <div className="text-sm font-jetbrains text-primary-purple">
                  ✓ Documentation technique
                </div>
                <div className="text-sm font-jetbrains text-primary-purple">
                  ✓ Transparence IA
                </div>
                <div className="text-sm font-jetbrains text-primary-purple">
                  ✓ Gouvernance des données
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-primary-orange/5 to-primary-orange/10 p-6 rounded-2xl hover:from-primary-orange/10 hover:to-primary-orange/20 transition-all border border-primary-orange/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-orange rounded-xl flex items-center justify-center">
                  <div className="text-white">
                    <FaGlobe />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  DSA
                </h3>
              </div>
              <p className="text-gray-600 font-manrope">
                Digital Services Act - Réglementation des services numériques et
                modération de contenu pour les plateformes digitales.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-jetbrains text-primary-orange">
                  ✓ Modération de contenu
                </div>
                <div className="text-sm font-jetbrains text-primary-orange">
                  ✓ Signalement d&apos;abus
                </div>
                <div className="text-sm font-jetbrains text-primary-orange">
                  ✓ Transparence algorithmes
                </div>
                <div className="text-sm font-jetbrains text-primary-orange">
                  ✓ Protection mineurs
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-gray-400/5 to-gray-400/10 p-6 rounded-2xl hover:from-gray-400/10 hover:to-gray-400/20 transition-all border border-gray-400/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center">
                  <div className="text-white">
                    <FaBalanceScale />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  DMA
                </h3>
              </div>
              <p className="text-gray-600 font-manrope">
                Digital Markets Act - Réglementation des marchés numériques et
                pratiques anticoncurrentielles des grandes plateformes.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-jetbrains text-gray-600">
                  ✓ Interopérabilité
                </div>
                <div className="text-sm font-jetbrains text-gray-600">
                  ✓ Portabilité données
                </div>
                <div className="text-sm font-jetbrains text-gray-600">
                  ✓ Accès équitable
                </div>
                <div className="text-sm font-jetbrains text-gray-600">
                  ✓ Transparence ranking
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-primary-blue/5 via-primary-purple/5 to-primary-green/5 p-6 rounded-2xl hover:from-primary-blue/10 hover:via-primary-purple/10 hover:to-primary-green/10 transition-all border-2 border-dashed border-primary-blue/30">
            <div className="space-y-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-green rounded-xl flex items-center justify-center mx-auto">
                <div className="text-white">
                  <FaPlus />
                </div>
              </div>
              <h3 className="text-xl font-bold font-inter text-primary-dark">
                Autres réglementations
              </h3>
              <p className="text-gray-600 font-manrope">
                Notre plateforme s&apos;adapte continuellement aux nouvelles
                réglementations européennes pour garantir votre conformité.
              </p>
              <button className="text-primary-blue font-medium font-inter hover:underline">
                Demander une réglementation →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regulations;
