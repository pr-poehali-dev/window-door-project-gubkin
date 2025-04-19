import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ReviewProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  image?: string;
}

const Review: React.FC<ReviewProps> = ({ name, date, text, rating, image }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xl font-bold text-door-DEFAULT">{name.charAt(0)}</span>
            )}
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        
        <div className="flex mb-3">
          {[...Array(fullStars)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
          ))}
          {hasHalfStar && <StarHalf className="w-5 h-5 fill-current text-yellow-400" />}
          {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-gray-300" />
          ))}
        </div>
        
        <p className="text-gray-600">{text}</p>
      </CardContent>
    </Card>
  );
};

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Анна Петрова',
      date: '15 марта 2023',
      text: 'Очень довольна своим выбором! Заказала межкомнатные двери, консультант помог подобрать идеальный вариант под мой интерьер. Монтаж выполнен качественно и в срок. Рекомендую!',
      rating: 5
    },
    {
      name: 'Сергей Иванов',
      date: '2 февраля 2023',
      text: 'Покупал входную дверь. Понравился большой выбор и адекватные цены. Установщики сработали профессионально, всё чисто и аккуратно. Дверью доволен, служит уже полгода без нареканий.',
      rating: 4.5
    },
    {
      name: 'Ольга Смирнова',
      date: '20 апреля 2023',
      text: 'Обращалась за заменой старых окон на новые пластиковые. Работа выполнена отлично, в квартире стало намного теплее и тише. Спасибо консультанту Алексею за помощь в выборе!',
      rating: 5
    },
    {
      name: 'Дмитрий Козлов',
      date: '10 января 2023',
      text: 'Заказывал комплект межкомнатных дверей для всей квартиры. Качество дверей отличное, установка прошла без проблем. Особенно понравилось, что мастера после работы убрали за собой весь мусор.',
      rating: 4
    },
    {
      name: 'Мария Соколова',
      date: '5 мая 2023',
      text: 'Хочу выразить благодарность магазину за отличное обслуживание! Двери доставили вовремя, установка была выполнена быстро и качественно. Всё как на картинке в каталоге, никаких сюрпризов!',
      rating: 5
    },
    {
      name: 'Александр Новиков',
      date: '28 марта 2023',
      text: 'Покупал входную дверь. Порадовало, что есть возможность подобрать фурнитуру отдельно. Установщики знают свое дело. Дверь стоит хорошо, не скрипит, закрывается плотно.',
      rating: 4.5
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы ценим мнение каждого клиента и постоянно работаем над улучшением качества наших услуг
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Review 
              key={index}
              name={review.name}
              date={review.date}
              text={review.text}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
