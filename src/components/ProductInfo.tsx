import { formatNumber } from '../utils/formatNumber';
import { Rating } from './Rating';
import { Product } from '../redux/types';

import styles from './ProductInfo.module.css';

export function ProductInfo({
  _id,
  image,
  title,
  rating,
  reviews,
  price,
  description,
  stock
}: Pick<
  Product,
  | '_id'
  | 'image'
  | 'title'
  | 'rating'
  | 'reviews'
  | 'price'
  | 'description'
  | 'stock'
>) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <Rating rating={rating} reviews={formatNumber(reviews)} />
      <p className={styles.price}>${price}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit
        dolorum inventore earum natus eveniet repudiandae expedita libero fugiat
        excepturi?
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        perferendis modi adipisci tenetur, pariatur praesentium.
      </p>
    </div>
  );
}
