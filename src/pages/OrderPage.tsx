import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'react-router-dom';
import { OrderDetails } from '../components/OrderDetails';
import { useGetOrderByIdQuery } from '../redux/services/orderApi';

import styles from './OrderPage.module.css';

export default function OrderPage() {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetOrderByIdQuery(id ?? skipToken);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isError ? (
    <h1>Something went wrong.</h1>
  ) : (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Order ID {id}</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.orderContainer}>
          <OrderDetails details={data!} />
          <div className={styles.order}>
            <h3 className={styles.orderTitle}>Order Items</h3>
            <div className={styles.orderItem}>
              <img
                src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
                alt="item"
                className={styles.orderItemImage}
              />
              <div>
                <p>
                  Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance
                  Boost SATA III 2.5
                </p>
                <p>1 x $109.00</p>
              </div>
              <div className={styles.orderItemPriceContainer}>
                <p>Price</p>
                <p className={styles.orderItemPriceAmount}>$109.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aside}>
          <h3 className={styles.asideTitle}>Order Summary</h3>
          <div className={styles.asideDetail}>
            <p>Items (1):</p>
            <p>$109.00</p>
          </div>
          <div className={styles.asideDetail}>
            <p>Shipping:</p>
            <p>$10.00</p>
          </div>
          <div className={styles.asideDetail}>
            <p>Tax:</p>
            <p>$14.17</p>
          </div>
          <div className={styles.asideDetail}>
            <p>Order Total:</p>
            <p> $133.17</p>
          </div>
        </div>
      </div>
    </div>
  );
}
