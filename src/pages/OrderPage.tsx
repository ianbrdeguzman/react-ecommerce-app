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
          <div className={styles.orderDetails}>order details</div>
          <div className={styles.order}>order items</div>
        </div>
        <div className={styles.aside}>aside</div>
      </div>
    </div>
  );
}
