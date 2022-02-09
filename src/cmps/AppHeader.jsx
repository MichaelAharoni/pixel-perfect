import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/imgs/svg/logo.svg';

export function AppHeader() {
  return (
    <section className='app-header'>
        <nav className='nav-links'>
      <img src={logoSvg} alt='logo'/>
      <div className='header-links'>
      <p>home</p>
      <p>about</p>
      </div>
        </nav>
        <button className='contact-btn'>contact us</button>
    </section>
  );
}
