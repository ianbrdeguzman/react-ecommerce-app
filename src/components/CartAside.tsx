import styles from './CartAside.module.css';

interface Props {
  totalPrice: number;
}

export function CartAside({ totalPrice }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Subtotal (2 items):{' '}
        <span>
          <b>${totalPrice}</b>
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
