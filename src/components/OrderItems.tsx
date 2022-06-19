import type { OrderItem } from '../redux/types';

import styles from './OrderItems.module.css';

interface Props {
  orderItems: OrderItem[];
}

export function OrderItems({ orderItems }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Order Items</h3>
      {orderItems.map((item) => (
        <div key={item._id} className={styles.item}>
          <img src={item.image} alt={item.title} className={styles.image} />
          <div className={styles.itemDetails}>
            <p>{item.title}</p>
            <p>
              {item.quantity} x ${item.price}
            </p>
          </div>
          <div className={styles.price}>
            <p>Price</p>
            <p className={styles.amount}>${item.quantity * item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
