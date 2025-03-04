import React from 'react';
import SectionTitle from '../common/SectionTitle/SectionTitle.js';
import CardList from '../CardList/CardList.js';
import './specialization.scss';
import decor3 from '../../img/decor/dec3.svg';


class Specialization extends React.Component{
    render() {
        return (  
            <section className='specialization'id='specialization'>
                <div className='specialization__container--wide'>
                    <SectionTitle smallTitle="What we Do?" bigTitle="Our Specialization" />
                    <div className='specialization__decor'>
                        <img src={decor3}></img>
                    </div>
                    <CardList />   
                </div>    
            </section>    
        )
    }
}

export default Specialization;