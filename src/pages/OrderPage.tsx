import { useParams } from 'react-router-dom';

import styles from './OrderPage.module.css';

export default function OrderPage() {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Order ID {id}</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.orderContainer}>
          <div className={styles.orderDetails}>
            <div className={styles.addressContainer}>
              <h3 className={styles.addressTitle}>Shipping address</h3>
              <p className={styles.addressDetail}>
                <b>Fullname:</b> Ian
              </p>
              <p className={styles.addressDetail}>
                <b>Address Line 1:</b> 123 Faker Street
              </p>
              <p className={styles.addressDetail}>
                <b>Address Line 2:</b> Unit 1
              </p>
              <p className={styles.addressDetail}>
                <b>City:</b> Toronto
              </p>
              <p className={styles.addressDetail}>
                <b>Postal Code:</b> L9T8X5
              </p>
              <p className={styles.addressDetail}>
                <b>Telephone:</b> 1234567890
              </p>
              <p className={styles.deliveryStatus}>Not Delivered</p>
            </div>
            <div className={styles.paymentContainer}>
              <h3 className={styles.paymentTitle}>Payment</h3>
              <p className={styles.paymentDetail}>
                <b>Method:</b> Paypal
              </p>
              <p className={styles.paymentStatus}>Paid at June 20, 2022</p>
            </div>
          </div>
          <div className={styles.order}>order items</div>
        </div>
        <div className={styles.aside}>aside</div>
      </div>
    </div>
  );
}
