import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../redux/types';

import styles from './ProductInfoAside.module.css';

export function ProductInfoAside({
  _id,
  price,
  stock
}: Pick<Product, '_id' | 'stock' | 'price'>) {
  const [qty, setQty] = useState<number>(1);

  return (
    <div className={styles.container}>
      <p className={styles.price}>${price}</p>
      <p className={styles.delivery}>
        <span>FREE Delivery</span> Wednesday June 1st
      </p>
      <p className={styles.stock}>
        {stock === 0 ? 'Out of Stock' : 'In Stock'}
      </p>
      <div className={styles.quantity}>
        <div className={styles.selectContainer}>
          <p>Qty:</p>
          {stock > 0 ? (
            <select
              className={styles.select}
              onChange={(e) => setQty(+e.currentTarget.value)}
            >
              {[...Array(stock)].map((i, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          ) : (
            <p>Out of stock</p>
          )}
        </div>
        <Link to={`/cart/${_id}/${qty}`} className={styles.button}>
          <button disabled={stock === 0}>
            {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </Link>
      </div>
    </div>
  );
}
