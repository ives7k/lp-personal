import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Personal trainer com cliente"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 opacity-0 animate-fadeInUp">
            Transforme Seu Corpo,<br />Transforme Sua Vida
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-lg opacity-0 animate-fadeInUp animation-delay-200">
            Treinamento personalizado que entrega resultados reais. 
            Experimente a diferença com métodos baseados em ciência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp animation-delay-400">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              Comece Sua Jornada
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scrollIndicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;