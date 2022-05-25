import numeral from 'numeral';
import { Rating } from './Rating';
import styles from './ProductItem.module.css';
import { format } from '../utils/format';

interface Props {
  title: string;
  image: string;
  rating: number;
  reviews: number;
}

export function ProductItem({ image, title, rating, reviews }: Props) {
  return (
    <li className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <p className={styles.title}>{title}</p>
      <Rating rating={rating} reviews={format(reviews)} />
    </li>
  );
}
