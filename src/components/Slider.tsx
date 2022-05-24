import { Carousel } from 'react-responsive-carousel';
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
        <img src="src/assets/slider-image-1.webp" alt="Image Slider 1" />
        <img src="src/assets/slider-image-2.webp" alt="Image Slider 2" />
        <img src="src/assets/slider-image-3.webp" alt="Image Slider 3" />
        <img src="src/assets/slider-image-4.webp" alt="Image Slider 4" />
      </Carousel>
    </div>
  );
}
