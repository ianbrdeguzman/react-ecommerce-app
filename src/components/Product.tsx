import numeral from 'numeral';
import { Rating } from './Rating';
import styles from './Product.module.css';

interface Props {
  title: string;
  image: string;
  rating: number;
  reviews: number;
}

export function Product({ image, title, rating, reviews }: Props) {
  return (
    <li className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <p className={styles.title}>{title}</p>
      <div className={styles.rating}>
        <Rating rating={rating} />
        <p className={styles.review}>{numeral(reviews).format('0,0')}</p>
      </div>
    </li>
  );
}
