// Banner.js
import React, { useState, useEffect } from 'react';
import './Banner.css';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';
import slider5 from '../../assets/slider5.png';
import slider6 from '../../assets/slider6.png';

const Banner = () => {
  const [index, setIndex] = useState(0);
  const images = [slider1, slider5, slider4, slider2, slider6, slider3];

  useEffect(() => {
    const changeSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const intervalId = setInterval(changeSlide, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div id="slider" className="slider-container">
      {images.map((image, i) => (
        <div key={i} className="slides" style={{ display: i === index ? 'block' : 'none' }}>
          <img src={image} width="100%" alt={`Slide ${i + 1}`} />
          <div className="banner-content">
            <h2>Irish Odia Association</h2>
            <h4>Kalinga Sahasika</h4>
          </div>
        </div>
      ))}
      <div id="dot">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === index ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
