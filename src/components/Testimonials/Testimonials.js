import React from 'react';
import './testimonials.scss';
import SectionTitle from '../common/SectionTitle/SectionTitle.js';
import ReviewSlider from '../ReviewSlider/ReviewSlider.js';
import decor from '../../img/decor/dec6.svg'

class Testimonials extends React.Component{
    render() {
        return (
            <section className='testimonials' id='testimonials'>
                <div className='testimonials__container'>
                    <div className='testimonials__decor'>
                        <img src={decor}></img>
                    </div>
                    <SectionTitle smallTitle="Testimonials" bigTitle="What Customers Say"/>
                    <ReviewSlider />
                </div>
            </section>
        )
    }
}

export default Testimonials;