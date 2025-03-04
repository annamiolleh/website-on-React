import React, {useRef} from 'react';
import { motion, useInView } from 'framer-motion';
import './pricingCards.scss';
import tick from '../../img/tick.svg'
import TransparentBtn from '../common/TransparentBtn/TransparentBtn.js';

const PricingCard = ({ title, price, elems, textBtn}) => {
  const ref = useRef(null);  
  const isInView = useInView(ref, { amount: 0.3 });  
    return (
        <motion.div
        ref={ref} 
        className="pricing__card"
        initial={{ opacity: 0, scaleY: 0, }}  
        animate={isInView ? { opacity: 1, scaleY: 1, } : {}}  
        transition={{ duration: 0.2, ease: 'easeOut', delay: 0.2, }} 
      >
        <h3 className='pricing__title'>{title}</h3>
        <div className="pricing__price">{price}</div>
        <ul className='pricing__list'>
          {elems.map((elem, index) => (
            <li key={index} className='pricing__item'>
              <img src={tick} alt="tick" />
              <p className='pricing__elem'>{elem}</p>
            </li>
          ))}
        </ul>
        <div>
          <TransparentBtn caption={textBtn}/>
        </div>
        </motion.div>  
    );
  };

  const PricingCardList = () => {
    const cards = [
      {
        title: 'For Starter', 
        price: '$1499',
        elems: [
            'Feedback Categorization',
            'Features prioritization',
            'Real-time collaboration',
            'Feedback loop notifications',
            'Essential dev tools integrations'
          ],
        textBtn:'Request Demo',
      },
      {
        title: 'For Teams', 
        price: '$2999',
        elems: [
            'Feedback Categorization',
            'Features prioritization',
            'Real-time collaboration',
            'Feedback loop notifications',
            'Essential dev tools integrations'
          ],
        textBtn:'Request Demo',
      },
      {
        title: 'For Company', 
        price: 'Custom',
        elems: [
            'Feedback Categorization',
            'Feedback loop notifications',
            'Essential dev tools integrations'
          ],
        textBtn:'Contact us',
      },
    ];
    return (
        <div className="pricing__cardList">
        {cards.map((card, index) => (
          <PricingCard 
            key={index} 
            title={card.title} 
            price={card.price} 
            elems={card.elems}
            textBtn={card.textBtn} 
          />
        ))}
      </div>
      );
}
export default PricingCardList;