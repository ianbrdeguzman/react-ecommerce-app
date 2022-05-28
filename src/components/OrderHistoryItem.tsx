import { Link } from 'react-router-dom';
import styles from './OrderHistoryItem.module.css';

export function OrderHistoryItem() {
  return (
    <article className={styles.container}>
      <section className={styles.orderSection}>
        <div className={styles.orderInfo}>
          <p className={styles.orderInfoTitle}>ORDER PLACED</p>
          <p>May 24 2021</p>
        </div>
        <div className={styles.orderInfo}>
          <p className={styles.orderInfoTitle}>TOTAL</p>
          <p>$133.44</p>
        </div>
        <div className={styles.orderInfo}>
          <p className={styles.orderInfoTitle}>SHIP TO</p>
          <p>street number</p>
          <p>city</p>
          <p>post code</p>
          <p>mobile number</p>
        </div>
        <div className={styles.orderInfo}>
          <div>
            <p className={styles.orderInfoTitle}>ORDER ID</p>
            <p>60abf846fdb24a00156e2f15</p>
          </div>
          <div>
            <p className={styles.orderInfoTitle}>PAID</p>
            <p>May 24, 2021</p>
          </div>
          <div>
            <p className={styles.orderInfoTitle}>DELIVERED</p>
            <p>No</p>
          </div>
        </div>
      </section>
      <section className={styles.itemSection}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg"
          alt="Product"
          className={styles.itemImage}
        />
        <div className={styles.itemInfo}>
          <p className={styles.itemInfoName}>Product Name</p>
          <Link to="/">
            <button className={styles.itemInfoButton}>Buy it again</button>
          </Link>
        </div>
      </section>
    </article>
  );
}
