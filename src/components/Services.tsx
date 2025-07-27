import React from 'react';
import { Users, User, BarChart3, Heart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:transform hover:-translate-y-1">
      <div className="bg-primary-50 p-4 rounded-full inline-flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <User className="h-8 w-8 text-primary-600" />,
      title: "Treino Individual",
      description: "Sessões de treinamento personalizadas adaptadas aos seus objetivos específicos, nível de condicionamento e horários. Máximos resultados com atenção dedicada."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Treino em Grupo",
      description: "Sessões motivadoras em pequenos grupos que combinam os benefícios do personal training com a energia e acessibilidade do fitness em grupo."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
      title: "Planejamento Nutricional",
      description: "Planos nutricionais personalizados que complementam seu regime de treinamento. Aprenda como nutrir seu corpo adequadamente para resultados ótimos."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Coaching de Estilo de Vida",
      description: "Abordagem abrangente que aborda sono, gerenciamento de estresse e recuperação para criar hábitos saudáveis sustentáveis além da academia."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serviços Oferecidos</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluções fitness abrangentes projetadas para ajudar você a alcançar seus objetivos de forma eficiente e sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#pricing" 
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Ver Opções de Preços
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;