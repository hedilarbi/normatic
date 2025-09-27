import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Comment fonctionne
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              {" "}
              Normatic
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-manrope max-w-3xl mx-auto">
            Une approche en 4 étapes pour automatiser complètement votre
            conformité réglementaire
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-blue/10 rounded-2xl mx-auto">
                  <span className="text-2xl font-bold font-inter text-primary-blue">
                    1
                  </span>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold font-inter text-primary-dark">
                    Connexion
                  </h3>
                  <p className="text-gray-600 font-manrope">
                    Connectez vos sites web, applications et documents en
                    quelques clics. Notre API s&apos;intègre facilement à votre
                    infrastructure existante.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <code className="text-sm font-jetbrains text-gray-700">
                    npm install @normatic/sdk
                    <br />
                    normatic.connect(apiKey)
                  </code>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-blue to-primary-green"></div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-green/10 rounded-2xl mx-auto">
                  <span className="text-2xl font-bold font-inter text-primary-green">
                    2
                  </span>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold font-inter text-primary-dark">
                    Analyse
                  </h3>
                  <p className="text-gray-600 font-manrope">
                    Notre IA scanne en continu vos assets digitaux pour
                    identifier toutes les non-conformités selon les 5
                    réglementations européennes.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-inter text-gray-600">Scan RGPD</span>
                    <span className="font-jetbrains text-primary-green">
                      ✓ Terminé
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-inter text-gray-600">
                      Analyse WCAG
                    </span>
                    <span className="font-jetbrains text-primary-orange">
                      ⟳ En cours
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-inter text-gray-600">
                      Vérif. AI Act
                    </span>
                    <span className="font-jetbrains text-gray-400">
                      ⏳ En attente
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-green to-primary-purple"></div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
              <div className="space-y-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-purple/10 rounded-2xl mx-auto">
                  <span className="text-2xl font-bold font-inter text-primary-purple">
                    3
                  </span>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold font-inter text-primary-dark">
                    Correction
                  </h3>
                  <p className="text-gray-600 font-manrope">
                    Génération automatique des corrections nécessaires avec
                    validation par nos experts juridiques avant déploiement.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="bg-primary-orange/10 p-3 rounded-lg">
                    <div className="text-sm font-inter text-primary-orange">
                      ⚠ Cookie non conforme
                    </div>
                    <div className="text-xs font-jetbrains text-gray-600 mt-1">
                      Correction générée
                    </div>
                  </div>
                  <div className="bg-primary-green/10 p-3 rounded-lg">
                    <div className="text-sm font-inter text-primary-green">
                      ✓ Contraste amélioré
                    </div>
                    <div className="text-xs font-jetbrains text-gray-600 mt-1">
                      Déployé avec succès
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-purple to-primary-orange"></div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
            <div className="space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-orange/10 rounded-2xl mx-auto">
                <span className="text-2xl font-bold font-inter text-primary-orange">
                  4
                </span>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold font-inter text-primary-dark">
                  Surveillance
                </h3>
                <p className="text-gray-600 font-manrope">
                  Monitoring continu avec rapports détaillés et alertes en temps
                  réel pour maintenir votre conformité à 100%.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-inter text-gray-600">
                    Statut global
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span className="text-sm font-jetbrains text-primary-green">
                      98.5%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary-green to-primary-blue h-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
