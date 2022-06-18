import { Order } from '../redux/types';
import styles from './OrderDetails.module.css';

interface Props {
  details: Order;
}

export function OrderDetails({ details }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.addressContainer}>
        <h3 className={styles.title}>Shipping address</h3>
        <p className={styles.detail}>
          <b>Fullname:</b> Ian
        </p>
        <p className={styles.detail}>
          <b>Address Line 1:</b> 123 Faker Street
        </p>
        <p className={styles.detail}>
          <b>Address Line 2:</b> Unit 1
        </p>
        <p className={styles.detail}>
          <b>City:</b> Toronto
        </p>
        <p className={styles.detail}>
          <b>Postal Code:</b> L9T8X5
        </p>
        <p className={styles.detail}>
          <b>Telephone:</b> 1234567890
        </p>
        <p className={styles.deliveryStatus}>Not Delivered</p>
      </div>
      <div className={styles.paymentContainer}>
        <h3 className={styles.title}>Payment</h3>
        <p className={styles.detail}>
          <b>Method:</b> Paypal
        </p>
        <p className={styles.paymentStatus}>Paid at June 20, 2022</p>
      </div>
    </div>
  );
}
