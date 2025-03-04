import React, { useState, useEffect } from 'react';
import './VideoPopup.scss'; 
import { motion, AnimatePresence } from 'framer-motion';

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления видимостью попапа

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Чистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [isOpen]); // Срабатывает при изменении состояния isOpen

  return (
    <div>
      {/* Кнопка для открытия попапа */}
      <button onClick={openPopup} className='main__btn'>Watch Video</button>

      {/* Попап с видео, который отображается при isOpen === true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="popup"
            className="popup"
            initial={{ opacity: 0, scale: 0 }}  
            animate={{ opacity: 1, scale: 1 }}   
            exit={{ opacity: 0, scale: 0 }}    
            transition={{ duration: 0.4, ease: 'easeOut' }}>
            <div className="popup__content">
              <button className="popup__close-btn" onClick={closePopup}>
                &times;
              </button>
              <iframe className='popup__video'
              src="https://www.youtube.com/embed/tqqg1Bv5Ikg?si=0teWCO2yU_s2La33" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            {/* Фон попапа, при клике на который попап закроется */}
            <div className="popup__overlay" onClick={closePopup}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoPopup;