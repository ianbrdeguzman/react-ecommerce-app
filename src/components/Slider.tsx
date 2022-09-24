import { Carousel } from 'react-responsive-carousel';
import sliderOne from '../../src/assets/slider-image-1.webp?url';
import sliderTwo from '../../src/assets/slider-image-2.webp?url';
import sliderThree from '../../src/assets/slider-image-3.webp?url';
import sliderFour from '../../src/assets/slider-image-4.webp?url';

import styles from './Slider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function Slider() {
  return (
    <div className={styles.container}>
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <img src={sliderOne} alt="Image Slider 1" />
        <img src={sliderTwo} alt="Image Slider 2" />
        <img src={sliderThree} alt="Image Slider 3" />
        <img src={sliderFour} alt="Image Slider 4" />
      </Carousel>
    </div>
  );
}
