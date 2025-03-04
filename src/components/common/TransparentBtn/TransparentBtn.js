import React from 'react';
import './transparentBtn.scss';
  
const TransparentBtn = ({ caption }) => {
    return (
        <button className='transparent-btn'>
            <span className="transparent-btn__text">{caption}</span>
        </button>
    );
};

export default TransparentBtn;
    