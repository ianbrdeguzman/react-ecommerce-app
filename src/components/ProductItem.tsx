import { Rating } from './Rating';
import { format } from '../utils/format';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';

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
      <Link key={_id} to={`/product/${_id}`}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <p className={styles.title}>{title}</p>
        <Rating rating={rating} reviews={format(reviews)} />
      </Link>
    </li>
  );
}
