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
    <li className={styles.container}>
      <Link to={`/product/${_id}`}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <p className={styles.title}>{title}</p>
        <Rating rating={rating} reviews={formatNumber(reviews)} />
      </Link>
    </li>
  );
}
