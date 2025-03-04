import React from 'react';
import { motion } from 'framer-motion';
import VideoPopup from '../VideoPopup/VideoPopup.js';
import Form from '../Form/Form.js';
import './mainSection.scss';
// Импортируем изображения
import pic1 from '../../img/main/img1.webp'
import pic2 from '../../img/main/img2.webp'
import pic3 from '../../img/main/img3.webp'
import pic4 from '../../img/main/img4.webp'
import pic5 from '../../img/main/img5.webp'
import pic6 from '../../img/main/img6.webp'

class Main extends React.Component{
    render() {
        return (
            <section className='main' id='main'>
                <div className='main__container container-main'>
                    <div className='main__decor1'>
                        <svg  viewBox="0 0 248 420" fill="#975de3">
                            <path d="M0.314392 0.570068H247.515V118.572H0.314392V0.570068Z" />
                            <path d="M0.314392 117.71H135.542V419.174H0.314392V117.71Z" />
                        </svg>
                        <motion.img src={pic1} 
                            className='main__decor1--pic1' alt="Design page 1"
                            initial={{ opacity: 0, x: -120}}
                            animate={{ opacity: 1, x: 0}}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2}}/>
                        <motion.img src={pic2} 
                            className='main__decor1--pic2' alt="Design page 2"
                            initial={{ opacity: 0, x: 50, scale: 0, scaleY: 0 }}
                            animate={{ opacity: 1, x: 0, scale: 1, scaleY: 1 }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4}}/>
                        <motion.img src={pic3} 
                            className='main__decor1--pic3' alt="Design page 3"
                            initial={{ opacity: 0, y: 120}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6}}/>
                    </div>
                    <div className='main__content'>
                        <motion.h1
                            className='main__title'
                            initial={{ opacity: 0, y: 120 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            >
                            We Develop <span>Shopify</span> sites
                        </motion.h1>
                        <motion.p
                            className='main__text'
                            initial={{ opacity: 0, y: 120 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                            >
                            Our team creates custom Shopify solutions that help businesses grow and stand out in the competitive eCommerce market.
                            From design to development, we craft Shopify stores that deliver seamless shopping experiences.
                        </motion.p>
                        <div className='main__wrap'>
                            <Form />
                            <VideoPopup />
                        </div>    
                    </div>
                    <div className='main__decor2'>
                        <svg className='main__rotate' width="248" height="420" viewBox="0 0 248 420" fill="#975de3">
                            <path d="M0.314392 0.570068H247.515V118.572H0.314392V0.570068Z" />
                            <path d="M0.314392 117.71H135.542V419.174H0.314392V117.71Z" />
                        </svg>
                        <motion.img src={pic4} 
                            className='main__decor2--pic4' alt="Design page 4"
                            initial={{ opacity: 0, x: -120}}
                            animate={{ opacity: 1, x: 0}}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.8}}/>
                        <motion.img src={pic5} 
                            className='main__decor2--pic5' alt="Design page 5"
                            initial={{ opacity: 0, x: 50, scale: 0, scaleY: 0, }}
                            animate={{ opacity: 1, x: 0, scale: 1, scaleY: 1, }}
                            transition={{ duration: 1.8, ease: 'easeOut', delay: 1}}/>
                        <motion.img src={pic6} 
                            className='main__decor2--pic6' alt="Design page 6"
                            initial={{ opacity: 0, y: 120}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 2, ease: 'easeOut', delay: 1.2}}/>
                    </div>
                </div>
            </section>
        )
    }
}
export default Main;