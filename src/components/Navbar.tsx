import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Dumbbell className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              ELITE FITNESS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Início', href: 'home' },
              { label: 'Sobre', href: 'about' },
              { label: 'Serviços', href: 'services' },
              { label: 'Transformações', href: 'transformations' },
              { label: 'Depoimentos', href: 'testimonials' },
              { label: 'Preços', href: 'pricing' },
              { label: 'Contato', href: 'contact' }
            ].map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {[
                { label: 'Início', href: 'home' },
                { label: 'Sobre', href: 'about' },
                { label: 'Serviços', href: 'services' },
                { label: 'Transformações', href: 'transformations' },
                { label: 'Depoimentos', href: 'testimonials' },
                { label: 'Preços', href: 'pricing' },
                { label: 'Contato', href: 'contact' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className="font-medium text-gray-800 hover:text-primary-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;