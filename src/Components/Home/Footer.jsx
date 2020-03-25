import React from 'react';

const Footer = () => (
  <footer className='footer'>
    <div className='a'></div>
    <div className='b'>
    <small>Copyright by Coders Lab</small>
    <div className='social-media'>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/Facebook.svg')} alt='facebook'/></a>
      <a href="https://www.instagram.com/?hl=pl" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/Instagram.svg')} alt='instagram'/></a>
    </div></div>
  </footer>
);

export default Footer;