import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const doors = [
  {
    id: 1,
    name: 'Дверь Favorite 3G',
    image: 'https://cdn.poehali.dev/files/cf3d98c5-48ed-4186-9437-9772081d379a.jpg',
    type: 'interior',
    description: 'Современная межкомнатная дверь со стеклянными вставками, подходит для гостиной и кухни'
  },
  {
    id: 2,
    name: 'Дверь VDL-01',
    image: 'https://cdn.poehali.dev/files/cf3d98c5-48ed-4186-9437-9772081d379a.jpg',
    type: 'interior',
    description: 'Элегантная межкомнатная дверь в светлых тонах, идеально впишется в современный интерьер'
  },
  {
    id: 3,
    name: 'Дверь Металлическая Премиум',
    image: 'https://cdn.poehali.dev/files/0738b8ca-e5a5-4e01-bf49-c247a9a2a3c1.jpg',
    type: 'entrance',
    description: 'Надежная входная дверь с шумо- и теплоизоляцией, двухконтурным уплотнением и надежными замками'
  },
  {
    id: 4,
    name: 'Дверь Bravo-23',
    image: 'https://cdn.poehali.dev/files/bd904f88-f46c-4449-a8a7-21da533e8290.jpg',
    type: 'interior',
    description: 'Стильная межкомнатная дверь с матовыми стеклянными вставками, подойдет для спальни или кабинета'
  },
  {
    id: 5,
    name: 'Дверь Vinchetta',
    image: 'https://cdn.poehali.dev/files/bd904f88-f46c-4449-a8a7-21da533e8290.jpg',
    type: 'entrance',
    description: 'Премиальная входная дверь с высокой степенью защиты от взлома, элегантным дизайном и отделкой из натуральных материалов'
  },
  {
    id: 6,
    name: 'Стальная дверь Стандарт',
    image: 'https://cdn.poehali.dev/files/aa8ff14f-1eee-49aa-ba11-97092bac6668.jpg',
    type: 'entrance',
    isNew: true,
    description: 'Надежная стальная входная дверь по доступной цене, оснащена качественными замками и имеет стильный дизайн'
  }
];

const ProductsCatalog: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);
  
  const filteredProducts = activeTab === 'all' 
    ? doors 
    : doors.filter(door => door.type === activeTab);
  
  const displayedProducts = filteredProducts.slice(0, visibleCount);
  
  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };
  
  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наш каталог дверей и окон</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите идеальные двери для вашего дома из нашего широкого ассортимента
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <div className="flex justify-center">
            <TabsList className="bg-gray-100">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-door-DEFAULT data-[state=active]:text-white"
              >
                Все двери
              </TabsTrigger>
              <TabsTrigger 
                value="interior"
                className="data-[state=active]:bg-door-DEFAULT data-[state=active]:text-white"
              >
                Межкомнатные
              </TabsTrigger>
              <TabsTrigger 
                value="entrance"
                className="data-[state=active]:bg-door-DEFAULT data-[state=active]:text-white"
              >
                Входные
              </TabsTrigger>
            </TabsList>
          </div>
        
          <TabsContent value="all" className="mt-8">
            <div className="door-grid">
              {displayedProducts.map(door => (
                <ProductCard 
                  key={door.id}
                  name={door.name}
                  image={door.image}
                  description={door.description}
                  isNew={door.isNew}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="interior" className="mt-8">
            <div className="door-grid">
              {displayedProducts.map(door => (
                <ProductCard 
                  key={door.id}
                  name={door.name}
                  image={door.image}
                  description={door.description}
                  isNew={door.isNew}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="entrance" className="mt-8">
            <div className="door-grid">
              {displayedProducts.map(door => (
                <ProductCard 
                  key={door.id}
                  name={door.name}
                  image={door.image}
                  description={door.description}
                  isNew={door.isNew}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {visibleCount < filteredProducts.length && (
          <div className="text-center mt-8">
            <Button 
              onClick={loadMore}
              className="bg-door-DEFAULT hover:bg-door-light text-white"
            >
              Загрузить ещё
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsCatalog;
