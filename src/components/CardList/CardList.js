import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './cardList.scss';
import PurpleBtn from '../common/PurpleBtn/PurpleBtn.js';
import icon1 from '../../img/specialization/icon1.svg'
import icon2 from '../../img/specialization/icon2.svg'
import icon3 from '../../img/specialization/icon3.svg'
import icon4 from '../../img/specialization/icon4.svg'
import icon5 from '../../img/specialization/icon3.svg'
import icon6 from '../../img/specialization/icon4.svg'

const Card = ({ icon, title, text, url }) => {
  const ref = useRef(null);  // Создаем референс для карточки
  const isInView = useInView(ref, { amount: 0.25 });  // Анимация при скролле на 1/4 карточки

  return (
    <motion.div
      ref={ref}  // Привязываем реф к карточке
      className="specialization__card card"
      initial={{ opacity: 0, scale: 0.8 }}  // Начальное состояние
      animate={isInView ? { opacity: 1, scale: 1 } : {}}  // Анимация при скролле
      transition={{ duration: 0.5, ease: 'easeOut' }}  // Настройка анимации
    >
      <div className='card__wrap'>
        <div className="card__icon">
          <img src={icon} alt={title} />
        </div>
        <h3 className="card__title">{title}</h3>
      </div>
      <p className="card__text">{text}</p>
      <a href={url} target="_blank" className="card__button">Read More</a>
    </motion.div>
  );
};
// Компонент для отображения карточек
const CardList = () => {
    const [showMore, setShowMore] = useState(false); // Состояние для показа дополнительных карточек
    const cards = [
      {
        icon: icon1, 
        title: 'Webflow Development',
        text: 'Webflow Development encompasses all stages from design to deployment, ensuring a cohesive and responsive design that can include animations, interactions, and complex layouts.',
        url: 'https://webflow.com/made-in-webflow/development',
      },
      {
        icon: icon2,
        title: 'Shopify Development',
        text: 'With features like secure and easy transactions, dynamic marketing/analysis tools, reliable hosting, and versatile third-party integration, Shopify has become one of the most widely used eCommerce solutions across the globe. No matter what your online business is, Shopify can help you grow.',
        url: 'https://shopify.dev/',
      },
      {
        icon: icon3,
        title: 'Figma Web Designing',
        text: 'Figma is a powerful web design and development tool that simplifies the process of creating stunning websites and web applications. It provides a collaborative platform for designers, developers, and other team members to work together seamlessly in real time. ',
        url: 'https://www.figma.com/web-design/',
      },
      {
        icon: icon4,
        title: 'Php Development',
        text: 'PHP is considered to be highly approachable for web development for many reasons, making it the ideal choice for delivering non-tech business solutions. It’s easy and cheap to set up, making running server-side applications simple to deploy.',
        url: 'https://www.php.net/',
      },
      {
        icon: icon5,
        title: 'React Development',
        text: 'React, is a powerful and flexible framework that provides you with a fast and efficient tool for building high-performance web applications.',
        url: 'https://react.dev/',
      },
      {
        icon: icon6,
        title: 'Node.js Development',
        text: 'Node.js is an extremely powerful, popular open-source, server-side platform. It uses an event-driven, non-blocking input/output model, which makes it fast and very efficient. ',
        url: 'https://nodejs.org/en',
      },
    ];
    // Показывать либо первые 4 карточки, либо все 6
    const visibleCards = showMore ? cards : cards.slice(0, 4);
    return (
      <div className="card-list">
        {visibleCards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} text={card.text} url={card.url} />
        ))}
        <div className='card-button'>
          <PurpleBtn className=' button button--margin'
          onClick={() => setShowMore(!showMore)} 
          title={showMore ? 'Learn less' : 'Learn more'} 
          />
        </div>
      </div>  
    );
    };

export default CardList;