import React from 'react';
import './header.scss';
import decor1 from '../../img/decor/dec1.svg';
import decor from '../../img/decor/dec8.svg';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }
  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isMenuOpen !== prevState.isMenuOpen) {
      if (this.state.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }
  render() {
    return (
        <header className="header">
          <div className='header__container container-header'>
            <a href='#' className='logo'>
                {/* <img src={logo2} alt="Logo"/> */}
                <h1>Teo</h1>
                <div className='logo__decor'>
                        <img src={decor}></img>
                </div>
            </a>
            <a className={`header__button ${this.state.isMenuOpen ? 'active' : ''}`} onClick={this.toggleMenu}>
              <span></span>
            </a>
            <nav className={`header__nav ${this.state.isMenuOpen ? 'open' : ''}`}>
              <ul className='header__list'>
                <li className='header__elem'><a href='#main'>Home</a> </li>
                <li className='header__elem'><a href='#specialization'>About</a> </li>
                <li className='header__elem'><a href='#testimonials'>Testimonials</a> </li>
                <li className='header__elem'><a href='#pricing'>Pricing</a> </li>
                <li className='header__elem'><a href='#contactUs'>Contacts</a> </li>
              </ul>
            </nav>
            <div className='header__decor'>
              <img src={decor1}></img>
            </div>
          </div> 
        </header>
        
    )
  }
}

export default Header; // экспорт