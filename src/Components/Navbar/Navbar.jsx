import React, { useState } from 'react';
import './Navbar.css';
import slussLogo from '../../assets/slussLogo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <img src={slussLogo} alt="Logo" className='nav-logo' />
      <img
        src={menu_open}
        alt="Open menu"
        className={`nav-mob-open ${menuOpen ? 'hidden' : ''}`}
        onClick={toggleMenu}
      />
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <img
          src={menu_close}
          alt="Close menu"
          className='nav-mob-close'
          onClick={toggleMenu}
        />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => handleMenuClick('home')} className={menu === 'home' ? 'active' : ''}>HOME</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleMenuClick('about')} className={menu === 'about' ? 'active' : ''}>ABOUT US</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => handleMenuClick('services')} className={menu === 'services' ? 'active' : ''}>SERVICES</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => handleMenuClick('portfolio')} className={menu === 'portfolio' ? 'active' : ''}>PORTFOLIO</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleMenuClick('connect-us')} className={menu === 'connect-us' ? 'active' : ''}>CONTACT US</p>
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'>
        <div className="nav-connect"><p>CONNECT WITH US</p></div>
      </AnchorLink>
    </div>
  );
}

export default Navbar;
