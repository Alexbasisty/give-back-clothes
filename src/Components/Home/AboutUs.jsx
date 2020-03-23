import React from 'react';

const AboutUs = () => (
    <div id="aboutUs" className="about-us">
        <section className="about-desc">
          <h2>O nas</h2>
          <img src={require('../../assets/Decoration.svg')} className="decor" alt='decoration'/>
          <p>
            Nori grape silver beet broccoli kombu
            beet greens fava bean potato quandong celery.
            Bunya nuts black-eyed pea
            prairie turnip leek lentil turnip greens parsnip.
          </p>
          <img src={require('../../assets/Signature.svg')} className="signature" alt='signature'/>
        </section>
        <section className="about-image" />
    </div>
);
export default AboutUs;