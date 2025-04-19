import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">О нас</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы - команда профессионалов с многолетним опытом работы на рынке дверей и окон в Губкине
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-xl">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/cf3d98c5-48ed-4186-9437-9772081d379a.jpg" 
                    alt="Наш магазин дверей" 
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/0738b8ca-e5a5-4e01-bf49-c247a9a2a3c1.jpg" 
                    alt="Ассортимент входных дверей" 
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/aa8ff14f-1eee-49aa-ba11-97092bac6668.jpg" 
                    alt="Наши металлические двери" 
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/bd904f88-f46c-4449-a8a7-21da533e8290.jpg" 
                    alt="Разнообразие дверной фурнитуры" 
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Почему выбирают нас?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-door-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Широкий ассортимент</h4>
                  <p className="text-gray-600">У нас вы найдете огромный выбор входных и межкомнатных дверей, окон и фурнитуры от ведущих производителей.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-door-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Качество и надежность</h4>
                  <p className="text-gray-600">Мы предлагаем только качественную продукцию, которая прослужит вам долгие годы.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-door-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Профессиональный монтаж</h4>
                  <p className="text-gray-600">Наши специалисты имеют большой опыт установки дверей и окон любой сложности.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-door-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Индивидуальный подход</h4>
                  <p className="text-gray-600">Мы поможем подобрать двери и окна, которые идеально подойдут для вашего интерьера и бюджета.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-door-DEFAULT mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Гарантия на продукцию и услуги</h4>
                  <p className="text-gray-600">Мы уверены в качестве наших товаров и работ, поэтому предоставляем гарантию.</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600">
              Наш магазин работает в Губкине уже более 10 лет. За это время мы помогли тысячам клиентов создать комфорт и уют в их домах. Обращаясь к нам, вы получаете не только качественные двери и окна, но и профессиональную консультацию, помощь в выборе и установку "под ключ".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
