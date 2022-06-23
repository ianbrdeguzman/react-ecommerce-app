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
    <h1 className={styles.loading}>Loading...</h1>
  ) : isError || !data ? (
    <h1 className={styles.error}>Something went wrong.</h1>
  ) : (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Order ID {id}</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.orderContainer}>
          <OrderDetails
            shippingDetails={data.shippingDetails}
            user={data.user}
            isDelivered={data.isDelivered}
            deliveredAt={data.deliveredAt}
            isPaid={data.isPaid}
            paidAt={data.paidAt}
            paymentMethod={data.paymentMethod}
          />
          <OrderItems orderItems={data.orderItems} />
        </div>
        <OrderSummary
          cartLength={data.orderItems.length}
          cartPrice={data.itemPrice}
          shippingPrice={data.shippingPrice}
          taxPrice={data.taxPrice}
          totalPrice={data.totalPrice}
          isPaid={data.isPaid}
        />
      </div>
    </div>
  );
}
