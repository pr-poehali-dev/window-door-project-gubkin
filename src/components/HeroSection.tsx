import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Найдите идеальные окна и двери в Губкине!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Широкий выбор высококачественных окон и дверей на любой вкус и бюджет. Доставка и профессиональная установка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-door-DEFAULT hover:bg-door-light text-white px-6 py-3">
                Посмотреть каталог
              </Button>
              <Button variant="outline" className="border-door-DEFAULT text-door-DEFAULT hover:bg-door-light hover:text-white">
                Связаться с нами
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative h-80 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-door-dark to-door-light opacity-80 z-10"></div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/cf3d98c5-48ed-4186-9437-9772081d379a.jpg" 
                  alt="Межкомнатные двери" 
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/0738b8ca-e5a5-4e01-bf49-c247a9a2a3c1.jpg" 
                  alt="Входные двери" 
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/aa8ff14f-1eee-49aa-ba11-97092bac6668.jpg" 
                  alt="Металлические двери" 
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/bd904f88-f46c-4449-a8a7-21da533e8290.jpg" 
                  alt="Дверная фурнитура" 
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
