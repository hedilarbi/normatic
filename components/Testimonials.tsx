import React from "react";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Ils nous font
            <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
              confiance
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-manrope max-w-3xl mx-auto">
            Plus de 1,200 entreprises européennes utilisent Normatic pour
            automatiser leur conformité réglementaire
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="space-y-6">
              <div className="flex text-primary-orange text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <blockquote className="text-gray-700 font-manrope text-lg leading-relaxed">
                Normatic nous a fait économiser des milliers d&apos;heures de
                travail juridique. La détection automatique des non-conformités
                RGPD est impressionnante et les corrections sont appliquées en
                temps réel.
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  alt="Marie Dubois"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold font-inter text-primary-dark">
                    Marie Dubois
                  </div>
                  <div className="text-sm text-gray-600 font-manrope">
                    DPO, TechFlow SAS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="space-y-6">
              <div className="flex text-primary-orange text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <blockquote className="text-gray-700 font-manrope text-lg leading-relaxed">
                L&apos;intégration a été transparente et nous avons
                immédiatement vu une amélioration de notre score
                d&apos;accessibilité WCAG. Le dashboard est clair et les
                rapports très détaillés.
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                  alt="Jean-Pierre Martin"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold font-inter text-primary-dark">
                    Jean-Pierre Martin
                  </div>
                  <div className="text-sm text-gray-600 font-manrope">
                    CTO, InnovWeb
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="space-y-6">
              <div className="flex text-primary-orange text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <blockquote className="text-gray-700 font-manrope text-lg leading-relaxed">
                Avec les nouvelles réglementations IA, nous étions perdus.
                Normatic nous a permis de rester conformes à l&apos;AI Act dès
                son entrée en vigueur. Un service indispensable pour notre
                startup.
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                  alt="Sophie Laurent"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold font-inter text-primary-dark">
                    Sophie Laurent
                  </div>
                  <div className="text-sm text-gray-600 font-manrope">
                    CEO, AI Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-gray-50 px-8 py-4 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold font-inter text-primary-dark">
                4.9/5
              </div>
              <div className="text-sm text-gray-600 font-manrope">
                Note moyenne
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold font-inter text-primary-dark">
                1,200+
              </div>
              <div className="text-sm text-gray-600 font-manrope">
                Entreprises
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold font-inter text-primary-dark">
                99.8%
              </div>
              <div className="text-sm text-gray-600 font-manrope">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
