import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.css';

export function EmptyCart() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="../src/assets/empty-cart.svg"
          alt="Empty Cart"
          className={styles.image}
        />
      </div>
      <div>
        <h2 className={styles.text}>Your Amazon Cart is empty</h2>
        <Link to="/">
          <button className={styles.button}>Go back shopping</button>
        </Link>
      </div>
    </div>
  );
}
