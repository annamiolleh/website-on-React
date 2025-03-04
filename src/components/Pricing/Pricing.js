import React from 'react';
import './pricing.scss';
import SectionTitle from '../common/SectionTitle/SectionTitle.js';
import PricingCards from '../PricingCards/PricingCards.js';
import decor from '../../img/decor/dec4.svg'

class Pricing extends React.Component{
    render() {
        return (
            <section className='pricing' id='pricing'>
                <div className='pricing__container'>
                    <SectionTitle smallTitle="Pricing" bigTitle="Pricing Policy"/>
                    <PricingCards />
                    <div className='pricing__decor'>
                        <img src={decor}></img>
                    </div>
                </div>
            </section>
        )
    }
}



export default Pricing;