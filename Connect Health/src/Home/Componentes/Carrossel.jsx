import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../AutoContext/ThemeContext';

const Carrossel = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
              if (theme === "dark"){
                  document.documentElement.classList.add("dark");
                  
              } else {
                  document.documentElement.classList.remove("dark");
              }
          }, [theme]);

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className=''>
          <img src={slide.image} alt="" className=' rounded-tl-xl rounded-tr-xl h-40 object-cover w-full' />
          <div className='bg-[#f5f5f5]/90 backdrop-blur-sm rounded-bl-xl rounded-br-xl dark:bg-[#f5f5f5]/30'>
            <h2 className=' text-black text-center font-bold uppercase pt-5 pb-4 dark:text-white'>{slide.title}</h2>
            <p className='text-black  w-[95%] mx-auto p-1 pb-3 h-full dark:text-white'>{slide.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carrossel;