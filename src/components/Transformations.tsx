import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TransformationProps {
  before: string;
  after: string;
  name: string;
  age: number;
  duration: string;
  story: string;
}

const transformations: TransformationProps[] = [
  {
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    name: "Miguel Santos",
    age: 34,
    duration: "6 meses",
    story: "Lutei contra o peso por anos. Depois de me comprometer com o programa e seguir o plano nutricional, perdi 20kg e ganhei definição muscular que nunca pensei ser possível."
  },
  {
    before: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    name: "Ana Costa",
    age: 28,
    duration: "4 meses",
    story: "Após ter meu segundo filho, queria recuperar minha força e confiança. Este programa me ajudou a perder o peso da gravidez e ficar mais forte do que jamais estive."
  },
  {
    before: "https://images.unsplash.com/photo-1509833903111-9cb142f644e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    name: "Carlos Oliveira",
    age: 42,
    duration: "8 meses",
    story: "Fui diagnosticado com pré-diabetes e sabia que precisava fazer uma mudança. Trabalhar com este programa me ajudou a perder 27kg e reverter completamente minha condição."
  }
];

const Transformations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? transformations.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === transformations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = transformations[currentIndex];

  return (
    <section id="transformations" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transformações Reais</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja os resultados incríveis que meus clientes alcançaram através de dedicação e orientação adequada.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-6 md:p-8">
              {/* Before & After Images */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">ANTES</p>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img 
                      src={current.before} 
                      alt={`${current.name} antes da transformação`}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">DEPOIS</p>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img 
                      src={current.after} 
                      alt={`${current.name} depois da transformação`}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>

              {/* Story & Details */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{current.name}, {current.age}</h3>
                <p className="text-primary-600 font-medium mb-6">Tempo de Transformação: {current.duration}</p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-600 italic">"{current.story}"</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">
                    {currentIndex + 1} of {transformations.length}
                  </p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      aria-label="Transformação anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      aria-label="Próxima transformação"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;