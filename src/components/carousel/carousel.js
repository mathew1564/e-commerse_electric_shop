import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.gif'
import banner3 from '../../img/banner3.gif'
import banner4 from '../../img/banner4.jpg'

function CarouselSlide() {
  return (
    <Carousel variant="dark" interval={1000} className='mt-4'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="First slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselSlide;