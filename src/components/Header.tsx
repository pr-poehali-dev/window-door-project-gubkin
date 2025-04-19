import React from 'react';
import { Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-door-DEFAULT">
              ДвериОкна Губкин
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#catalog" className="text-gray-700 hover:text-door-DEFAULT transition duration-300">
              Каталог
            </a>
            <a href="#about" className="text-gray-700 hover:text-door-DEFAULT transition duration-300">
              О нас
            </a>
            <a href="#services" className="text-gray-700 hover:text-door-DEFAULT transition duration-300">
              Услуги
            </a>
            <a href="#contact" className="text-gray-700 hover:text-door-DEFAULT transition duration-300">
              Контакты
            </a>
          </nav>
          
          <div className="flex items-center">
            <a href="tel:+79040872377" className="flex items-center text-gray-700 hover:text-door-DEFAULT">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-medium">8-904-087-23-77</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
