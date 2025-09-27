import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Des tarifs
            <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              {" "}
              transparents et abordables
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-manrope max-w-3xl mx-auto">
            Choisissez la formule adaptée à la taille de votre entreprise. Tous
            les plans incluent le support expert et les mises à jour
            automatiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-inter text-primary-dark">
                  Starter
                </h3>
                <p className="text-gray-600 font-manrope">
                  Pour les petites entreprises
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold font-inter text-primary-dark">
                    €299
                  </span>
                  <span className="text-gray-500 font-manrope">/mois</span>
                </div>
                <p className="text-sm text-gray-500 font-manrope">
                  Facturation annuelle : €2,990/an (2 mois gratuits)
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Jusqu&apos;à 5 sites web
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    RGPD + WCAG 2.1
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Corrections automatiques
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Dashboard &amp; rapports
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Support email
                  </span>
                </div>
              </div>

              <button className="w-full bg-primary-blue text-white py-3 rounded-xl font-semibold font-inter hover:bg-blue-600 transition-colors">
                Commencer l&apos;essai gratuit
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-blue to-primary-purple p-0.5 rounded-2xl">
            <div className="bg-white p-8 rounded-2xl h-full relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary-blue to-primary-purple text-white px-4 py-1 rounded-full text-sm font-medium font-inter">
                  Recommandé
                </span>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-inter text-primary-dark">
                    Professional
                  </h3>
                  <p className="text-gray-600 font-manrope">
                    Pour les entreprises en croissance
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold font-inter text-primary-dark">
                      €599
                    </span>
                    <span className="text-gray-500 font-manrope">/mois</span>
                  </div>
                  <p className="text-sm text-gray-500 font-manrope">
                    Facturation annuelle : €5,990/an (2 mois gratuits)
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="text-primary-green" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-check"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        ></path>
                      </svg>
                    </i>
                    <span className="font-manrope text-gray-700">
                      Jusqu&apos;à 20 sites web
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="text-primary-green" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-check"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        ></path>
                      </svg>
                    </i>
                    <span className="font-manrope text-gray-700">
                      Toutes les réglementations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="text-primary-green" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-check"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        ></path>
                      </svg>
                    </i>
                    <span className="font-manrope text-gray-700">
                      API &amp; intégrations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="text-primary-green" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-check"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        ></path>
                      </svg>
                    </i>
                    <span className="font-manrope text-gray-700">
                      Support prioritaire
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="text-primary-green" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-check"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        ></path>
                      </svg>
                    </i>
                    <span className="font-manrope text-gray-700">
                      Audit expert mensuel
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="text-primary-green" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-check"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        ></path>
                      </svg>
                    </i>
                    <span className="font-manrope text-gray-700">
                      Rapports personnalisés
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary-blue to-primary-purple text-white py-3 rounded-xl font-semibold font-inter hover:opacity-90 transition-opacity">
                  Commencer l&apos;essai gratuit
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-inter text-primary-dark">
                  Enterprise
                </h3>
                <p className="text-gray-600 font-manrope">
                  Pour les grandes organisations
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold font-inter text-primary-dark">
                    Sur mesure
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-manrope">
                  Tarification adaptée à vos besoins
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Sites illimités
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Déploiement on-premise
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    SLA personnalisé
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Account manager dédié
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Formation équipe
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="text-primary-green" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-check"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </i>
                  <span className="font-manrope text-gray-700">
                    Intégrations sur mesure
                  </span>
                </div>
              </div>

              <button className="w-full border-2 border-primary-blue text-primary-blue py-3 rounded-xl font-semibold font-inter hover:bg-primary-blue hover:text-white transition-all">
                Nous contacter
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-manrope">
            Tous les plans incluent un essai gratuit de 14 jours • Sans
            engagement • Support expert inclus
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
