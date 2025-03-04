import React from 'react';
import './purpleBtn.scss';

class PurpleBtn extends React.Component{
    render() {
        return ( 
                <button 
                    type='button' 
                    className='button' 
                    onClick={this.props.onClick} // Добавляем обработчик клика
                >
                    {this.props.title}
                </button>
        )
    }
}
export default PurpleBtn;