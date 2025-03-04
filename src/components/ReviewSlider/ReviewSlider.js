import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';  
import 'swiper/css';
import 'swiper/css/navigation';  
import './reviewSlider.scss';
import star from '../../img/Star.svg'
import btn from '../../img/buttonSlider.svg'


const ReviewList = [
    { 
      estimation: 'Superb Work!',
      feedback: '“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”',
      stars: star,
      name: 'Sabo Masties',
    },
    { 
      estimation: 'Excellent Service!',
      feedback: '“Their professionalism and attention to detail exceeded my expectations. Highly recommended!”',
      stars: star,
      name: 'John Doe',
    },
    { 
      estimation: 'Great Experience!',
      feedback: '“An unforgettable experience with top-notch service. I will definitely return!”',
      stars: star,
      name: 'Jane Smith',
    },
    { 
      estimation: 'Fantastic!',
      feedback: '“The team was amazing, and the results speak for themselves. Truly fantastic work!”',
      stars: star,
      name: 'Michael Johnson',
    },
    { 
      estimation: 'Impressive!',
      feedback: '“From start to finish, the service was flawless. I am beyond impressed.”',
      stars: star,
      name: 'Emily Davis',
    },
  ];

const ReviewSlider = () => {
  const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }
    };
    return (
        <div className='testimonials__slider'>
            <div className='testimonials__dec'></div>
            <div className='testimonials__swiper'>
                <Swiper className='testimonials-over'
                modules={[Navigation]} 
                navigation={{
                    nextEl: '.custom-next',  // Подключаем кастомные кнопки
                    prevEl: '.custom-prev',
                }}            
                spaceBetween={15}           
                watchSlidesProgress={true}
                slidesPerView={3}
                autoheight={false.toString()}
                breakpoints={{
                    1440: {
                    slidesPerView: 3,       
                    },
                    768: {
                      slidesPerView: 2,       
                    },
                    320: {
                      slidesPerView: 1,       
                    },
                }}
                ref={swiperRef}
                >
                {ReviewList.map((elem, index) => (
                <SwiperSlide key={index} className='swiper-slide-custom'>
                <div className="testimonials__slider slider">
                    <h3 className="slider__title">{elem.estimation}</h3>
                    <p className="slider__text">{elem.feedback}</p>
                    <div className="slider__star">
                        {[...Array(5)].map((_, starIndex) => (
                        <img key={starIndex} src={elem.stars} alt="star" />
                    ))}
                    </div>
                    <p className="slider__name">{elem.name}</p>
                </div>
                </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className='button-wrap'>
                <button 
                  className={`custom-prev ${isBeginning ? 'disabled' : ''}`} 
                  disabled={isBeginning}
                  ><img src={btn} alt="switcher"/>
                </button>
                <button 
                  className={`custom-next ${isEnd ? 'disabled' : ''}`} 
                  disabled={isEnd}>
                  <img src={btn} alt="switcher"/>
                </button>
   
            </div>
        </div>
    );
  };

export default ReviewSlider;