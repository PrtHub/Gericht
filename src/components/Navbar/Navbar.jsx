import React, { useState } from 'react';
import './navbar.css';
import {RiCloseLine } from 'react-icons/ri';
import {RxHamburgerMenu} from 'react-icons/rx'
import images from '../../constants/images' 

const Menu = () => (
  <>
    <li className='p__opensans'><a href="#home">Home</a></li>
    <li className='p__opensans'><a href="#about">About</a></li>
    <li className='p__opensans'><a href="#menu">Menu</a></li>
    <li className='p__opensans'><a href="#awards">Awards</a></li>
    <li className='p__opensans'><a href="#contact">Contact</a></li>
  </>
)

const Navbar = () => {
   const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        <Menu />
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Login / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>


      <div className="app__navbar-smallscreen">
        <RxHamburgerMenu color='#fff' fontSize={27} className='app__navbar-smallscreen-menu' onClick={() => setToggleMenu(true)} />
         { toggleMenu && (<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <RiCloseLine  fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen-links'>
            <Menu/>
            <div className="app__navbar-login-smallscreen">
          <a href="#login" className='p__opensans'>Login</a>
          <a href="/" className='p__opensans'>Book Table</a>
      </div>
          </ul>
        </div>)}
      </div>

    </nav>
  )
};

export default Navbar;