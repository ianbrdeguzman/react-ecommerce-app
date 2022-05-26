import type { Product } from '../data';
import { format } from '../utils/format';
import { Aside } from './Aside';
import { Rating } from './Rating';

import styles from './ProductInfo.module.css';

interface Props {
  product: Product;
}

export function ProductInfo({ product }: Props) {
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div>
        <h1 className={styles.title}>{product.title}</h1>
        <Rating rating={product.rating} reviews={format(product.reviews)} />
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit
          dolorum inventore earum natus eveniet repudiandae expedita libero
          fugiat excepturi?
        </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus perferendis modi adipisci tenetur, pariatur
          praesentium.
        </p>
      </div>
      <Aside product={product} />
    </div>
  );
}
