import { Link } from 'react-router-dom';
import { Order } from '../redux/types';
import { formatDate } from '../utils/formatDate';

import styles from './OrderHistoryItem.module.css';

interface Props {
  order: Order;
}

export function OrderHistoryItem({
  order: {
    _id,
    createdAt,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
    orderItems,
    shippingDetails: { addressOne, addressTwo, city, fullname, phone, postal }
  }
}: Props) {
  return (
    <article className={styles.container}>
      <Link to={`/order/${_id}`}>
        <section className={styles.orderSection}>
          <div className={styles.orderInfo}>
            <p className={styles.orderInfoTitle}>ORDER PLACED</p>
            <p>{formatDate(createdAt)}</p>
          </div>
          <div className={styles.orderInfo}>
            <p className={styles.orderInfoTitle}>TOTAL</p>
            <p>${totalPrice}</p>
          </div>
          <div className={styles.orderInfo}>
            <p className={styles.orderInfoTitle}>SHIP TO</p>
            <p>{fullname}</p>
            <p>{addressOne}</p>
            <p>{addressTwo}</p>
            <p>{city}</p>
            <p>{postal}</p>
            <p>{phone}</p>
          </div>
          <div className={styles.orderInfo}>
            <div className={styles.orderInfo}>
              <p className={styles.orderInfoTitle}>ORDER ID</p>
              <p>{_id}</p>
            </div>
            <div className={styles.orderInfo}>
              <p className={styles.orderInfoTitle}>PAID</p>
              <p>{isPaid ? formatDate(paidAt) : 'No'}</p>
            </div>
            <div className={styles.orderInfo}>
              <p className={styles.orderInfoTitle}>DELIVERED</p>
              <p>{isDelivered ? formatDate(deliveredAt) : 'No'}</p>
            </div>
          </div>
        </section>
      </Link>
      <section className={styles.itemSection}>
        {orderItems.map(({ _id, image, title, productId }) => (
          <article key={_id} className={styles.item}>
            <img src={image} alt={title} className={styles.itemImage} />
            <div className={styles.itemInfo}>
              <Link to={`/product/${productId}`}>
                <p className={styles.itemInfoName}>{title}</p>
              </Link>
              <Link to={`/cart/${productId}/1`}>
                <button className={styles.itemInfoButton}>Buy it again</button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
}
