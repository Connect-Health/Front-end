import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carrossel = ({ slides }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className=''>
          <img src={slide.image} alt="" className='rounded-tl-xl rounded-tr-xl h-40 object-cover w-full' />
          <div className='bg-[#f5f5f5]/30 backdrop-blur-sm rounded-bl-xl rounded-br-xl'>
            <h2 className='text-center font-bold uppercase pt-5 pb-4 text-white'>{slide.title}</h2>
            <p className='text-white w-[95%] mx-auto p-1 pb-3 h-full'>{slide.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carrossel;