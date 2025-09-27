import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Questions
            <span className="bg-gradient-to-r from-primary-purple to-primary-orange bg-clip-text text-transparent">
              {" "}
              fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-manrope">
            Tout ce que vous devez savoir sur Normatic et la conformité
            réglementaire automatisée
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold font-inter text-primary-dark">
                Comment Normatic détecte-t-il les non-conformités sur mon site
                web ?
              </h3>
              <div className="text-primary-blue">
                <FaChevronDown />
              </div>
            </button>
            <div className="px-6 pb-6 text-gray-600 font-manrope leading-relaxed">
              Normatic utilise une IA avancée qui scanne continuellement vos
              sites web, applications et documents. Notre technologie analyse le
              code source, les contenus, les cookies, les formulaires et tous
              les éléments susceptibles d&apos;impacter la conformité RGPD,
              WCAG, AI Act, DSA et DMA. Le scan s&apos;effectue 24h/24 avec des
              alertes en temps réel.
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold font-inter text-primary-dark">
                Les corrections automatiques sont-elles sûres pour mon site ?
              </h3>
              <div className="text-primary-blue">
                <FaChevronDown />
              </div>
            </button>
            <div className="px-6 pb-6 text-gray-600 font-manrope leading-relaxed">
              Absolument. Toutes les corrections sont d&apos;abord générées par
              notre IA, puis validées par nos experts juridiques avant
              déploiement. Vous gardez le contrôle total avec la possibilité de
              prévisualiser, approuver ou rejeter chaque correction. Notre
              système de sauvegarde automatique permet un rollback instantané si
              nécessaire.
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold font-inter text-primary-dark">
                Combien de temps faut-il pour intégrer Normatic ?
              </h3>
              <div className="text-primary-blue">
                <FaChevronDown />
              </div>
            </button>
            <div className="px-6 pb-6 text-gray-600 font-manrope leading-relaxed">
              L&apos;intégration est très rapide : moins de 30 minutes pour la
              plupart des sites web. Il suffit d&apos;ajouter notre script de
              tracking ou d&apos;utiliser notre API. Pour les applications
              complexes, notre équipe technique vous accompagne gratuitement. Le
              premier scan complet s&apos;effectue dans les 2 heures suivant
              l&apos;installation.
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold font-inter text-primary-dark">
                Que se passe-t-il si de nouvelles réglementations apparaissent ?
              </h3>
              <div className="text-primary-blue">
                <FaChevronDown />
              </div>
            </button>
            <div className="px-6 pb-6 text-gray-600 font-manrope leading-relaxed">
              Notre équipe de veille juridique surveille en permanence
              l&apos;évolution des réglementations européennes. Dès qu&apos;une
              nouvelle réglementation est adoptée ou qu&apos;une mise à jour est
              publiée, nous intégrons automatiquement les nouveaux critères dans
              notre moteur d&apos;analyse. Vous recevez les mises à jour sans
              action de votre part.
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold font-inter text-primary-dark">
                Puis-je essayer Normatic gratuitement ?
              </h3>
              <div className="text-primary-blue">
                <FaChevronDown />
              </div>
            </button>
            <div className="px-6 pb-6 text-gray-600 font-manrope leading-relaxed">
              Oui ! Nous offrons un essai gratuit de 14 jours sur tous nos
              plans, sans engagement et sans carte de crédit requise. Vous avez
              accès à toutes les fonctionnalités pour tester Normatic sur vos
              sites web. Notre équipe support vous accompagne durant cette
              période d&apos;essai pour optimiser votre configuration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
