import { useState } from 'react';
import { Product } from '../redux/types';
import { Link } from 'react-router-dom';

import styles from './Aside.module.css';

interface Props {
  product: Product;
}

export function Aside({ product }: Props) {
  const [qty, setQty] = useState<number>(1);

  return (
    <div className={styles.container}>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.delivery}>
        <span>FREE Delivery</span> Wednesday June 1st
      </p>
      <p className={styles.stock}>
        {product.stock === 0 ? 'Out of Stock' : 'In Stock'}
      </p>
      <div className={styles.quantity}>
        <div className={styles.selectContainer}>
          <p>Qty:</p>
          {product.stock > 0 ? (
            <select
              className={styles.select}
              onChange={(e) => setQty(+e.currentTarget.value)}
            >
              {[...Array(product.stock)].map((i, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          ) : (
            <p>Out of stock</p>
          )}
        </div>
        <Link to={`/cart/${product._id}/${qty}`}>
          <button disabled={product.stock === 0} className={styles.button}>
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </Link>
      </div>
    </div>
  );
}
