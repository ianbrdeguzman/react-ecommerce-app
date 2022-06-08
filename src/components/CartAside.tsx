import { useAppSelector } from '../redux/hooks';

import styles from './CartAside.module.css';

export function CartAside() {
  const { cartItemsPrice } = useAppSelector((state) => state.cartSlice);

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Subtotal (2 items):{' '}
        <span>
          <b>${cartItemsPrice}</b>
        </span>
      </p>
      <button
        className={styles.button}
        onClick={() => console.log('go to checkout page')}
      >
        Proceed to checkout
      </button>
    </div>
  );
}
