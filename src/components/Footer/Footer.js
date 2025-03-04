import React from 'react';
import './footer.scss';

class Footer extends React.Component{
    render() {
        return (
            <section className='footer'>
                 <div className='footer__container'>
                    <p>Copyright 2021 &copy;TEO All rights reserved.</p>
                 </div>
            </section>
        )
    }
}
export default Footer;