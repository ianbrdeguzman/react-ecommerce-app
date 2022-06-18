import styles from './OrderSummary.module.css';

interface Props {
  totalNumOfItems: number;
  itemPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

export function OrderSummary({
  totalNumOfItems,
  itemPrice,
  shippingPrice,
  taxPrice,
  totalPrice
}: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Order Summary</h3>
      <div className={styles.detail}>
        <p>Items ({totalNumOfItems}):</p>
        <p>${itemPrice}</p>
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
    </div>
  );
}
