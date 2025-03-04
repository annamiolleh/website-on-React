import React, { useRef } from 'react';
import './sectionTitle.scss';
import { motion, useInView } from 'framer-motion';

const SectionTitle = ({ smallTitle, bigTitle, titlesWrapClass }) => {
    const ref = useRef(null);  // Референс на элемент
    const isInView = useInView(ref, { amount: 0.25 });  // Анимация при скролле на 1/4 секции
  
    return (
      <div ref={ref} className={`titles__wrap ${titlesWrapClass}`}>
        <motion.h5
          className='small-title'
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}  // Анимация при скролле
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          {smallTitle}
        </motion.h5>
  
        <motion.h2
          className='big-title'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}  // Анимация при скролле
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          {bigTitle}
        </motion.h2>
      </div>
    );
  };
export default SectionTitle;