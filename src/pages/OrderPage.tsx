import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'react-router-dom';
import { OrderDetails } from '../components/OrderDetails';
import { OrderItems } from '../components/OrderItems';
import { OrderSummary } from '../components/OrderSummary';
import { OnApproveData } from '@paypal/paypal-js';
import { useAppSelector } from '../redux/hooks';
import {
  useGetOrderByIdQuery,
  usePayOrderByIdMutation
} from '../redux/services/orderApi';

import styles from './OrderPage.module.css';

export default function OrderPage() {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.userSlice);
  const {
    data: order,
    isError: orderError,
    isLoading: orderLoading
  } = useGetOrderByIdQuery(id && user ? id : null ?? skipToken);
  const [payOrderById, { isError: payOrderError }] = usePayOrderByIdMutation();

  const handleOnClick = async (onApproveData: OnApproveData) => {
    if (order && user) {
      await payOrderById({
        id: order._id,
        paymentResult: {
          id: onApproveData.orderID,
          status: 'COMPLETED',
          update_time: new Date().toString(),
          email_address: user.email
        }
      });
    }
  };

  return orderLoading ? (
    <h1 className={styles.loading}>Loading...</h1>
  ) : orderError || !order ? (
    <h1 className={styles.error}>Something went wrong.</h1>
  ) : (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Order ID {id}</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.orderContainer}>
          <OrderDetails
            shippingDetails={order.shippingDetails}
            user={order.user}
            isDelivered={order.isDelivered}
            deliveredAt={order.deliveredAt}
            isPaid={order.isPaid}
            paidAt={order.paidAt}
            paymentMethod={order.paymentMethod}
          />
          <OrderItems orderItems={order.orderItems} />
        </div>
        <OrderSummary
          cartLength={order.orderItems.length}
          cartPrice={order.itemPrice}
          shippingPrice={order.shippingPrice}
          taxPrice={order.taxPrice}
          totalPrice={order.totalPrice}
          isPaid={order.isPaid}
          onClick={handleOnClick}
          isError={payOrderError}
        />
      </div>
    </div>
  );
}
