import React from 'react';

const Footer = () => (
  <footer>
    <small>Copyright by Coders Lab</small>
    <div className='social-media'>
      <a href="https://www.facebook.com/" target="_blank"><img src={require('../../assets/Facebook.svg')} /></a>
      <a href="https://www.instagram.com/?hl=pl" target="_blank"><img src={require('../../assets/Instagram.svg')} /></a>
    </div>
  </footer>
);

export default Footer;