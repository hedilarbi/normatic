import React from "react";
import { FaTriangleExclamation, FaUserTie } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

const Problem = () => {
  return (
    <section id="problem" className="py-20  bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Les PME européennes face au
            <span className="text-primary-orange"> défi réglementaire</span>
          </h2>
          <p className="text-xl text-gray-600 font-manrope max-w-3xl mx-auto">
            Avec l&apos;explosion des réglementations numériques, maintenir la
            conformité devient un cauchemar pour les entreprises.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-red-400 text-2xl">
                <FaTriangleExclamation />
              </div>
            </div>
            <h3 className="text-xl font-bold font-inter text-primary-dark mb-4">
              Amendes croissantes
            </h3>
            <p className="text-gray-600 font-manrope mb-6">
              Les sanctions RGPD peuvent atteindre 4% du CA annuel. En 2023,
              plus de 1,6 milliard d&apos;euros d&apos;amendes ont été
              infligées.
            </p>
            <div className="bg-red-600/10 rounded-lg p-4">
              <span className="font-mono text-2xl font-bold text-red-400">
                €1.6B
              </span>
              <p className="font-text text-sm text-red-400">
                d&apos;amendes RGPD en 2023
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-primary-orange text-2xl">
                <GoClockFill />
              </div>
            </div>
            <h3 className="text-xl font-bold font-inter text-primary-dark mb-4">
              Complexité croissante
            </h3>
            <p className="text-gray-600 font-manrope mb-6">
              5 réglementations majeures à respecter simultanément, avec des
              mises à jour constantes et des exigences techniques complexes.
            </p>
            <div className="space-y-2 bg-primary-orange/10 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-text text-gray-600">RGPD</span>
                <span className="font-mono text-primary-orange">Active</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-text text-gray-600">WCAG 2.2</span>
                <span className="font-mono text-primary-orange">Active</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-text text-gray-600">AI Act</span>
                <span className="font-mono text-primary-orange">2024</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-primary-purple/20 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-primary-purple text-2xl">
                <FaUserTie />
              </div>
            </div>
            <h3 className="text-xl font-bold font-inter text-primary-dark mb-4">
              Ressources limitées
            </h3>
            <p className="text-gray-600 font-manrope mb-6">
              Les PME n&apos;ont ni les budgets ni les équipes juridiques pour
              gérer la conformité en interne de manière efficace.
            </p>
            <div className="bg-primary-purple/10 rounded-lg p-4">
              <span className="font-mono text-2xl font-bold text-primary-purple">
                73%
              </span>
              <p className="font-text text-sm text-primary-purple">
                des PME non-conformes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
