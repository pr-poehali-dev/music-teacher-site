import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const programs = [
    {
      title: 'Начальный курс',
      description: 'Для детей 5-7 лет. Знакомство с музыкой через игру',
      duration: '3 месяца',
      features: ['Основы нотной грамоты', 'Развитие слуха', 'Первые мелодии'],
      icon: 'Music2'
    },
    {
      title: 'Классическая программа',
      description: 'Академическое обучение игре на фортепиано',
      duration: '1-2 года',
      features: ['Классический репертуар', 'Техника игры', 'Теория музыки'],
      icon: 'Piano'
    },
    {
      title: 'Современная музыка',
      description: 'Изучение современных стилей и импровизации',
      duration: '6-12 месяцев',
      features: ['Джаз и поп-музыка', 'Импровизация', 'Аккомпанемент'],
      icon: 'Headphones'
    }
  ];

  const gallery = [
    {
      image: 'https://cdn.poehali.dev/projects/b9c9f320-6289-4c01-951c-3ee9d49b9ca1/files/00725974-0e5c-4d91-a268-f6f9f24be76c.jpg',
      title: 'Индивидуальные занятия',
      description: 'Персональный подход к каждому ученику'
    },
    {
      image: 'https://cdn.poehali.dev/projects/b9c9f320-6289-4c01-951c-3ee9d49b9ca1/files/c67ed321-c014-42b7-ac68-dadc714ebf36.jpg',
      title: 'Музыкальная атмосфера',
      description: 'Вдохновляющее пространство для творчества'
    },
    {
      image: 'https://cdn.poehali.dev/projects/b9c9f320-6289-4c01-951c-3ee9d49b9ca1/files/5a56f30f-8bd9-4889-a2fe-105fe840b04b.jpg',
      title: 'Концертные выступления',
      description: 'Регулярные отчетные концерты учеников'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Music" size={28} />
              Музыкальная Школа
            </h1>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className={`transition-colors ${activeSection === 'programs' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Уроки
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`transition-colors ${activeSection === 'gallery' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Галерея
              </button>
            </div>
            <Button className="hidden md:inline-flex">Записаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Откройте мир
                <span className="text-primary block">музыки</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональное обучение игре на фортепиано для детей и взрослых. 
                Индивидуальный подход и проверенные методики.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/b9c9f320-6289-4c01-951c-3ee9d49b9ca1/files/00725974-0e5c-4d91-a268-f6f9f24be76c.jpg"
                alt="Урок музыки"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: 'Award', title: '15+ лет', text: 'опыта преподавания' },
              { icon: 'Users', title: '200+', text: 'довольных учеников' },
              { icon: 'Trophy', title: '50+', text: 'призеров конкурсов' }
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon name={stat.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Учебные программы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите программу, которая подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 pb-4 border-b">
                    <p className="text-sm text-gray-600">Продолжительность</p>
                    <p className="font-semibold">{program.duration}</p>
                  </div>
                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 bg-gradient-to-r from-primary to-secondary text-white border-none shadow-xl animate-fade-in">
            <CardContent className="py-12 px-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Индивидуальный подход</h3>
              <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
                Каждая программа адаптируется под ваш уровень подготовки, музыкальные предпочтения и цели. 
                Используем современные методики и классические техники обучения.
              </p>
              <Button size="lg" variant="secondary" className="text-primary font-semibold">
                Записаться на пробный урок
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Моменты из жизни нашей музыкальной школы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Music" size={24} />
                Музыкальная Школа
              </h3>
              <p className="text-gray-400">
                Профессиональное обучение музыке с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@music-school.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Музыкальная Школа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
