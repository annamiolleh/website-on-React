import React from 'react';
import './contactUs.scss';
import SectionTitle from '../common/SectionTitle/SectionTitle.js';
import Form from '../Form/Form.js';
import decor from '../../img/decor/dec5.svg';


class ContactUs extends React.Component{
    render() {
        return (
            <section className='contactUs' id='contactUs'>
                <div className='contactUs__container'>
                    <div className='contactUs__decor'>
                        <img src={decor}></img>
                    </div>
                    <SectionTitle bigTitle="Need a little more home to grow?" titlesWrapClass='custom-titles__wrap'/>
                    <Form />
                </div>    
            </section>
        )
    }
}
export default ContactUs;