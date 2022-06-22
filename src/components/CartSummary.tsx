import { Link } from 'react-router-dom';

import styles from './CartSummary.module.css';

interface Props {
  cartPrice: number;
  cartLength: number;
}

export function CartSummary({ cartPrice, cartLength }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {`Subtotal (${cartLength} items): `}
        <span>
          <b>${cartPrice}</b>
        </span>
      </p>
      <Link to="/shipping">
        <button className={styles.button}>Proceed to checkout</button>
      </Link>
    </div>
  );
}
