import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface ProductCardProps {
  name: string;
  image: string;
  description?: string;
  isNew?: boolean;
  discount?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  description,
  isNew,
  discount
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="product-card overflow-hidden">
          <div className="relative">
            {isNew && (
              <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold uppercase text-gray-900 rounded-full px-2 py-1 z-10">
                Новинка
              </div>
            )}
            {discount && (
              <div className="absolute top-2 right-2 bg-red-500 text-xs font-bold uppercase text-white rounded-full px-2 py-1 z-10">
                {discount}
              </div>
            )}
            <div className="h-60 overflow-hidden">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <CardContent className="pt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
            <p className="text-sm text-gray-500">Узнать цену у консультанта</p>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="w-full border-door-DEFAULT text-door-DEFAULT hover:bg-door-light hover:text-white">
              Подробнее
            </Button>
          </CardFooter>
        </Card>
      </HoverCardTrigger>
      
      <HoverCardContent className="w-80">
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{description || "Высококачественная дверь, которая прослужит долгие годы. Доступна в различных цветовых решениях под ваш интерьер."}</p>
          <p className="text-sm font-medium">Для уточнения стоимости свяжитесь с нами по телефону 8-904-087-23-77</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProductCard;
