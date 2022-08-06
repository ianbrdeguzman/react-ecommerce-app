import { skipToken } from '@reduxjs/toolkit/query/react';
import { OrderHistoryItem } from '../components/OrderHistoryItem';
import { useAppSelector } from '../redux/hooks';
import { useGetOrdersQuery } from '../redux/services/orderApi';

import styles from './OrderHistoryPage.module.css';

export default function OrderHistoryPage() {
  const { user } = useAppSelector((state) => state.userSlice);
  const { data, isError, isLoading } = useGetOrdersQuery(user ?? skipToken);

  return isLoading ? (
    <h1 className={styles.loading}>Loading...</h1>
  ) : isError ? (
    <h1 className={styles.error}>Something went wrong. </h1>
  ) : (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Orders</h1>
      {data && data.length > 0 ? (
        data.map((order) => <OrderHistoryItem key={order._id} order={order} />)
      ) : (
        <p>You have not placed any orders yet.</p>
      )}
    </div>
  );
}
