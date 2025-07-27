import React from 'react';
import { Award, Clock, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Seu Treinador</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicado a ajudar você a alcançar seus objetivos fitness através de treinamento personalizado e orientação nutricional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Personal Trainer" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">João Silva</h3>
            <p className="text-gray-600 mb-6">
              Com mais de 10 anos de experiência e múltiplas certificações, já ajudei centenas de clientes a transformarem seus corpos e vidas através de programas de fitness personalizados e planos nutricionais.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Profissional Certificado</h4>
                  <p className="text-gray-600">Personal Trainer certificado CREF, Coach em Nutrição Esportiva e Especialista em Treinamento Funcional.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Década de Experiência</h4>
                  <p className="text-gray-600">Ajudando clientes de todas as idades e níveis de condicionamento a alcançarem seus objetivos pessoais há mais de 10 anos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Resultados Comprovados</h4>
                  <p className="text-gray-600">Especializado em transformações corporais, treinamento de força e mudanças sustentáveis de estilo de vida.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Agende uma Consulta Gratuita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;