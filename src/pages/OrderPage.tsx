import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'react-router-dom';
import { OrderDetails } from '../components/OrderDetails';
import { OrderItems } from '../components/OrderItems';
import { OrderSummary } from '../components/OrderSummary';
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
          <OrderItems orderItems={data!.orderItems} />
        </div>
        <OrderSummary
          totalNumOfItems={data!.orderItems.length}
          itemPrice={data!.itemPrice}
          shippingPrice={data!.shippingPrice}
          taxPrice={data!.taxPrice}
          totalPrice={data!.totalPrice}
        />
      </div>
    </div>
  );
}
