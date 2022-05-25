import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import styles from './Rating.module.css';

interface Props {
  rating: number;
  reviews: string;
}

export function Rating({ rating, reviews }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.star}>
        {rating >= 1 ? (
          <BsStarFill />
        ) : rating >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span className={styles.star}>
        {rating >= 2 ? (
          <BsStarFill />
        ) : rating >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span className={styles.star}>
        {rating >= 3 ? (
          <BsStarFill />
        ) : rating >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span className={styles.star}>
        {rating >= 4 ? (
          <BsStarFill />
        ) : rating >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span className={styles.star}>
        {rating >= 5 ? (
          <BsStarFill />
        ) : rating >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span className={styles.reviews}>{reviews}</span>
    </div>
  );
}
