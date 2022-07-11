import { Alert } from './Alert';
import styles from './PlaceOrderSummary.module.css';

interface Props {
  cartLength: number;
  cartPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  isError?: boolean;
}

export function PlaceOrderSummary({
  cartLength,
  cartPrice,
  shippingPrice,
  taxPrice,
  totalPrice,
  isPaid,
  onClick,
  isLoading,
  isError
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
      {isError && (
        <Alert type="error" title="Something went wrong." text=""></Alert>
      )}
      {!isPaid && (
        <button
          disabled={isLoading || isError}
          onClick={onClick}
          className={styles.button}
        >
          {isLoading ? 'Loading...' : 'Place Order'}
        </button>
      )}
    </div>
  );
}
