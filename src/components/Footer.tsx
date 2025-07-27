import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-primary-500" />
              <span className="ml-2 font-bold text-xl">ELITE FITNESS</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforme seu corpo e mente com treinamento personalizado que traz resultados.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: 'home' },
                { label: 'Sobre', href: 'about' },
                { label: 'Serviços', href: 'services' },
                { label: 'Transformações', href: 'transformations' },
                { label: 'Depoimentos', href: 'testimonials' },
                { label: 'Preços', href: 'pricing' },
                { label: 'Contato', href: 'contact' }
              ].map((item) => (
                <li key={item.href}>
                  <a href={`#${item.href}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {[
                'Treinamento Individual',
                'Treino em Pequenos Grupos',
                'Planejamento Nutricional',
                'Coaching de Estilo de Vida',
                'Coaching Online',
                'Wellness Corporativo'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber dicas de fitness, conselhos nutricionais e ofertas especiais.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu endereço de email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Inscrever
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              Ao se inscrever, você concorda com nossa Política de Privacidade e consente em receber atualizações.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Elite Fitness. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Termos de Serviço
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;