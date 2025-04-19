import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Связаться с нами</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Наши специалисты помогут вам выбрать идеальный вариант для вашего дома
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-door-DEFAULT mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg text-gray-900 mb-1">Адрес</h3>
                  <p className="text-gray-700">г. Губкин, улица Лазарева, 6</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-door-DEFAULT mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg text-gray-900 mb-1">Телефон</h3>
                  <p className="text-gray-700">
                    <a href="tel:+79040872377" className="hover:text-door-DEFAULT transition-colors">
                      8-904-087-23-77
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-door-DEFAULT mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-lg text-gray-900 mb-1">Часы работы</h3>
                  <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-700">Сб: 10:00 - 16:00</p>
                  <p className="text-gray-700">Вс: выходной</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="w-full bg-door-DEFAULT hover:bg-door-light text-white">
                Позвонить сейчас
              </Button>
            </div>
          </div>
          
          <div className="h-80 md:h-full min-h-[320px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.2585095422747!2d37.535111!3d51.298098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41267a1eaa62b6f3%3A0xc4b0872397e9c7f8!2z0YPQuy4g0JvQsNC30LDRgNC10LLQsCwgNiwg0JPRg9Cx0LrQuNC9LCDQkdC10LvQs9C-0YDQvtC00YHQutCw0Y8g0L7QsdC7LiwgMzA5MTgz!5e0!3m2!1sru!2sru!4v1654654654654"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта местоположения"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
