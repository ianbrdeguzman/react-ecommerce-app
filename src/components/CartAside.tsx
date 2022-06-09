import styles from './CartAside.module.css';

interface Props {
  totalPrice: number;
  totalItems: number;
}

export function CartAside({ totalPrice, totalItems }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {`Subtotal (${totalItems} items): `}
        <span>
          <b>${totalPrice.toFixed(2)}</b>
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
