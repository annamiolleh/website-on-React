import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Модуль для автопрокрутки
import './infiniteSlider.scss';
import 'swiper/css';
import 'swiper/css/autoplay';


// Импортируем изображения
import logo1 from '../../img/infiniteSlider/logo1.svg';
import logo2 from '../../img/infiniteSlider/logo2.svg';
import logo3 from '../../img/infiniteSlider/logo3.svg';
import logo4 from '../../img/infiniteSlider/logo4.svg';
import logo5 from '../../img/infiniteSlider/logo5.svg';
import decor2 from '../../img/decor/dec2.svg';

const logos = [
  { src: logo1, url: 'https://www.chase.com/' },
  { src: logo2, url: 'https://asana.com/' },
  { src: logo3, url: 'https://about.google/' },
  { src: logo4, url: 'https://www.buzzfeed.com/' },
  { src: logo5, url: 'https://www.walmart.com/' }
];

const InfiniteSlider = () => {
  const duplicatedLogos = [...logos, ...logos]; // Дублируем логотипы
  return (
    <section className='swiper__container container-swiper'>
      <div className='swiper__decor'>
        <img src={decor2}></img>
      </div>
      <Swiper className ='indent-swiper'
        loop={true}                 // Включаем бесконечную прокрутку
        autoplay={{                 // Настройки автопрокрутки
          delay: 2000,              // Задержка между слайдами (2 сек)
          disableOnInteraction: false, // Продолжать после взаимодействия пользователя
        }}
        spaceBetween={30}           // Расстояние между логотипами
        modules={[Autoplay]}        // Подключаем модуль Autoplay
        breakpoints={{
          1024: {
            slidesPerView: 5,       
          },
          480: {
            slidesPerView: 3,       
          },
          320: {
            slidesPerView: 2,       
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <SwiperSlide className='swiper__position' key={index}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer" className='swiper__slide'>
              <img src={logo.src} alt={`Logo ${index + 1}`} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InfiniteSlider;