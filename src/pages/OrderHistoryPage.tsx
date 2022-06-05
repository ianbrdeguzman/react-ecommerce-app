import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderHistoryItem } from '../components/OrderHistoryItem';
import { useAppSelector } from '../redux/hooks';
import { useGetOrdersQuery } from '../redux/services/orderApi';

import styles from './OrderHistoryPage.module.css';

export default function OrderHistoryPage() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.userSlice);
  const { data, error, isLoading } = useGetOrdersQuery(user ?? skipToken);

  useEffect(() => {
    if (!user) {
      navigate({
        pathname: '/login',
        search: '?redirect=/order-history'
      });
    }
  }, []);

  return (
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
