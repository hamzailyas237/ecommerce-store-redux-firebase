

import Carousel from 'react-bootstrap/Carousel';
import sliderImgOne from '../images/slider-image-one.png'
import sliderImgTwo from '../images/slider-image-two.png'
import sliderImgThree from '../images/slider-image-three.png'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImgOne} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImgTwo} alt="Second slide" />
      </Carousel.Item>      
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImgThree} alt="Second slide" />
      </Carousel.Item>      
    </Carousel>
  );
}

export default Slider;