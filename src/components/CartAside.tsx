import { Link } from 'react-router-dom';

import styles from './CartAside.module.css';

interface Props {
  cartPrice: number;
  cartLength: number;
}

export function CartAside({ cartPrice, cartLength }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {`Subtotal (${cartLength} items): `}
        <span>
          <b>${cartPrice.toFixed(2)}</b>
        </span>
      </p>
      <Link to="/shipping">
        <button className={styles.button}>Proceed to checkout</button>
      </Link>
    </div>
  );
}
