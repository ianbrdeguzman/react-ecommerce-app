import styles from './OrderSummary.module.css';

interface Props {
  cartLength: number;
  cartPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid?: boolean;
  onClick?: () => void;
}

export function OrderSummary({
  cartLength,
  cartPrice,
  shippingPrice,
  taxPrice,
  totalPrice,
  isPaid,
  onClick
}: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Order Summary</h3>
      <div className={styles.detail}>
        <p>Items ({cartLength}):</p>
        <p>${cartPrice}</p>
      </div>
      <div className={styles.detail}>
        <p>Shipping:</p>
        <p>${shippingPrice}</p>
      </div>
      <div className={styles.detail}>
        <p>Tax:</p>
        <p>${taxPrice}</p>
      </div>
      <div className={styles.detail}>
        <p>Order Total:</p>
        <p>${totalPrice}</p>
      </div>
      {!isPaid && (
        <button onClick={onClick} className={styles.button}>
          Place Order
        </button>
      )}
    </div>
  );
}
