import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import InfiniteSlider from './components/InfiniteSlider/InfiniteSlider';
import Specialization from './components/Specialization/Specialization';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

class App extends React.Component { 
  render() {
    return (
      <>
        <Header />
        <Main />
        <InfiniteSlider /> 
        <Specialization />
        <Testimonials />
        <Pricing />
        <ContactUs />
        <Footer/>
      </>
    );
  }
}


export default App;
