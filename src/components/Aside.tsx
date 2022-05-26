import type { Product } from '../data';
import styles from './Aside.module.css';

interface Props {
  product: Product;
}

export function Aside({ product }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.delivery}>
        <span>FREE Delivery</span> Wednesday June 1st
      </p>
      <p className={styles.stock}>In Stock</p>
      <div className={styles.quantity}>
        <p>Qty:</p>
        {product.qty > 0 ? (
          <select name="qty" id="qty" className={styles.select}>
            {[...Array(product.qty)].map((i, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        ) : (
          <p>Out of stock</p>
        )}
      </div>
      <button
        disabled={product.qty === 0}
        className={styles.button}
        onClick={() => console.log('add to cart')}
      >
        Add to Cart
      </button>
    </div>
  );
}
