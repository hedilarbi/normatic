import React from "react";

const TrustedBy = () => {
  return (
    <section
      id="trusted-by"
      className="py-16 bg-gray-50 text-black font-inter font-medium"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <p className="text-gray-500 font-medium font-inter">
            Plus de 1,200 entreprises européennes nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-blue rounded"></div>
              <span className="font-bold font-inter text-xl">TechCorp</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-green rounded-full"></div>
              <span className="font-bold font-inter text-xl">DataFlow</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-purple rounded"></div>
              <span className="font-bold font-inter text-xl">SecureNet</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-orange rounded-full"></div>
              <span className="font-bold font-inter text-xl">CloudBase</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded"></div>
              <span className="font-bold font-inter text-xl">InnovateLab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
