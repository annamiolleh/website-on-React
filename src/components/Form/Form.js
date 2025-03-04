import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from 'framer-motion';
import './form.scss';
import PurpleBtn from '../common/PurpleBtn/PurpleBtn.js';
import TransparentBtn from '../common/TransparentBtn/TransparentBtn.js';
import decor from '../../img/decor/dec7.svg';

// Настройка стилей для модального окна

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Incorrect email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  message: Yup.string().required("Enter your request"),
});

const MyForm = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openPopupForm = () => setIsOpen(true);
    const closePopupForm = () => setIsOpen(false);

    // Эффект для управления скроллингом
    useEffect(() => {
        if (isOpen) {
        // Отключить прокрутку
        document.body.style.overflow = 'hidden';
        } else {
        // Включить прокрутку снова
        document.body.style.overflow = 'auto';
        }

        // Чистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = 'auto'; // Возвращаем прокрутку при размонтировании
    };
  }, [isOpen]); // Срабатывает при изменении состояния isOpen

    const sendEmail = (values) => {
        emailjs.send(
          'service_5otc0ue', // ID вашего сервиса EmailJS
          'template_g8qbgfi', // ID вашего шаблона EmailJS
          values,
          'IvjZf-gyhWo7e5-fx' // Ваш User ID из EmailJS
        ).then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          closePopupForm();
        }).catch((error) => {
          console.error('FAILED...', error);
        });
};
return (
    <div>
      <PurpleBtn title='Contact Us' onClick={openPopupForm}/>
      <div className="contactPopup">
      <AnimatePresence>
          {isOpen && (
              <motion.div
              key="popup"
              className="contactPopup__wrap"
              initial={{ opacity: 0, scale: 0 }}  
              animate={{ opacity: 1, scale: 1 }}   
              exit={{ opacity: 0, scale: 0 }}    
              transition={{ duration: 0.5, ease: 'easeOut' }} 
              >
                <div className="contactPopup__content">
                  <div className="contactPopup__wrapper">
                    <div className='contactPopup__decor'>
                        <img src={decor}></img>
                    </div>
                    <h2 className="contactPopup__title">Get in touch</h2>
                    <button className="contactPopup__close-btn" onClick={closePopupForm}>&times;</button>
                  </div>
                  <Formik
                  initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                      sendEmail(values);
                      setSubmitting(false);
                  }}
                  >
                  {({ isSubmitting }) => (
                      <Form className="contactPopup__form">
                        <div className="contactPopup__elem">
                            <label htmlFor="name"></label>
                            <Field className="contactPopup__item" type="text" name="name" placeholder="Enter your name &rarr;" />
                            <ErrorMessage className="contactPopup__error" name="name" component="div" />
                        </div>

                        <div className="contactPopup__elem">
                            <label htmlFor="email"></label>
                            <Field className="contactPopup__item" type="email" name="email" placeholder="Enter your email  &rarr;"/>
                            <ErrorMessage className="contactPopup__error" name="email" component="div" />
                        </div>

                        <div className="contactPopup__elem">
                            <label htmlFor="phone"></label>
                            <Field className="contactPopup__item" type="text" name="phone" placeholder="Enter your phone  &rarr;"/>
                            <ErrorMessage className="contactPopup__error" name="phone" component="div" />
                        </div>

                        <div className="contactPopup__elem">
                            <label htmlFor="message"></label>
                            <Field className="contactPopup__item contactPopup__item--textarea" as="textarea" name="message" placeholder="Enter your message  &rarr;"/>
                            <ErrorMessage className="contactPopup__error" name="message" component="div" />
                        </div>
                        <TransparentBtn caption='Send' type="submit" disabled={isSubmitting}/>
                      </Form>
                  )}
                  </Formik>
                </div>
                <div className="contactPopup__overlay" onClick={closePopupForm}></div>
              </motion.div>
          )}
        </AnimatePresence>
        </div>
    </div>
  );
}
export default MyForm;