import React from 'react';
import { Carousel } from 'react-bootstrap';


import bn1 from '../../../images/banner/bn1.jpg'
import bn2 from '../../../images/banner/bn2.jpg'
import bn3 from '../../../images/banner/bn3.png'

const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className=" w-100"
      src={bn1}
      alt=""
    />
    <Carousel.Caption>
      <h3>Take care of your Teeth</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bn2}
      alt=""
    />

    <Carousel.Caption>
      <h3>Brush everyday</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bn3}
      alt=""
    />

    <Carousel.Caption>
      <h3>Stay healthy</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;