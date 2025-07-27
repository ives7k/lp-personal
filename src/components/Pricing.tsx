import React from 'react';
import { Check } from 'lucide-react';

interface PricingPlanProps {
  title: string;
  price: string;
  frequency: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  title, 
  price, 
  frequency, 
  features, 
  isPopular = false 
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
      isPopular ? 'border-2 border-primary-500 transform scale-105 md:-translate-y-4' : ''
    }`}>
      {isPopular && (
        <div className="absolute top-0 inset-x-0 bg-primary-500 text-white text-xs font-medium text-center py-1">
          MAIS POPULAR
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-2">{frequency}</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="ml-3 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`block w-full py-3 px-6 text-center font-medium rounded-lg transition-colors ${
            isPopular
              ? 'bg-primary-600 hover:bg-primary-700 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          Escolher Plano
        </a>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Iniciante",
      price: "R$ 120",
      frequency: "por sessão",
      features: [
        "Treinamento individual 1-on-1",
        "Avaliação física completa",
        "Resumo e anotações da sessão",
        "Flexibilidade de pagamento por sessão",
        "Acesso ao app de treinamento"
      ]
    },
    {
      title: "Transformação",
      price: "R$ 450",
      frequency: "por mês",
      features: [
        "8 sessões de treino por mês",
        "Programa de treino personalizado",
        "Orientação nutricional",
        "Check-ins semanais",
        "Análise de composição corporal",
        "Suporte por mensagem 24/7"
      ],
      isPopular: true
    },
    {
      title: "Elite",
      price: "R$ 750",
      frequency: "por mês",
      features: [
        "12 sessões de treino por mês",
        "Plano nutricional abrangente",
        "Orientação personalizada de suplementos",
        "Protocolos de recuperação",
        "Ensaio fotográfico mensal de progresso",
        "Agendamento prioritário",
        "Coaching de estilo de vida"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planos de Preços</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre o plano de treinamento perfeito para seus objetivos e orçamento. Todos os planos incluem acesso ao nosso app de fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              frequency={plan.frequency}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Não tem certeza de qual plano é ideal para você?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
          >
            Agende uma Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;