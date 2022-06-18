import { Rating } from './Rating';
import { formatNumber } from '../utils/formatNumber';
import { Link } from 'react-router-dom';

import styles from './ProductItem.module.css';

interface Props {
  _id: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
}

export function ProductItem({ _id, image, title, rating, reviews }: Props) {
  return (
    <Link to={`/product/${_id}`} className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <p className={styles.title}>{title}</p>
      <Rating rating={rating} reviews={formatNumber(reviews)} />
    </Link>
  );
}
