import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ДвериОкна Губкин</h3>
            <p className="text-gray-400 mb-4">
              Широкий выбор высококачественных окон и дверей на любой вкус и бюджет.
            </p>
            <p className="text-gray-400">
              © {currentYear} ДвериОкна Губкин. Все права защищены.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Каталог</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-door-light transition-colors">Межкомнатные двери</a></li>
              <li><a href="#" className="hover:text-door-light transition-colors">Входные двери</a></li>
              <li><a href="#" className="hover:text-door-light transition-colors">Пластиковые окна</a></li>
              <li><a href="#" className="hover:text-door-light transition-colors">Фурнитура</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>г. Губкин, улица Лазарева, 6</p>
              <p>
                <a href="tel:+79040872377" className="hover:text-door-light transition-colors">
                  8-904-087-23-77
                </a>
              </p>
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: выходной</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
