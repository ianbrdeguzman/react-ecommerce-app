import cn from 'classnames';
import { ShippingDetails, User } from '../redux/types';
import { formatDate } from '../utils/formatDate';

import styles from './OrderDetails.module.css';

interface Props {
  shippingDetails: ShippingDetails;
  user: User;
  isDelivered?: boolean;
  deliveredAt?: string;
  isPaid?: boolean;
  paidAt?: string;
  paymentMethod: string;
}

export function OrderDetails({
  shippingDetails,
  user,
  isDelivered,
  deliveredAt,
  isPaid,
  paidAt,
  paymentMethod
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.addressContainer}>
        <h3 className={styles.title}>Shipping address</h3>
        <p className={styles.detail}>
          <b>Fullname:</b> {user.name}
        </p>
        <p className={styles.detail}>
          <b>Address Line 1:</b> {shippingDetails.addressOne}
        </p>
        <p className={styles.detail}>
          <b>Address Line 2:</b> {shippingDetails.addressTwo}
        </p>
        <p className={styles.detail}>
          <b>City:</b> {shippingDetails.city}
        </p>
        <p className={styles.detail}>
          <b>Postal Code:</b> {shippingDetails.city}
        </p>
        <p className={styles.detail}>
          <b>Telephone:</b> {shippingDetails.phone}
        </p>
        {isDelivered && deliveredAt ? (
          <p
            className={cn(styles.status, {
              [styles.positive]: isDelivered
            })}
          >
            {formatDate(deliveredAt)}
          </p>
        ) : (
          <p
            className={cn(styles.status, {
              [styles.negative]: !isDelivered
            })}
          >
            Not Delivered
          </p>
        )}
      </div>
      <div className={styles.paymentContainer}>
        <h3 className={styles.title}>Payment</h3>
        <p className={styles.payment}>
          <b>Method:</b> {paymentMethod}
        </p>
        {isPaid && paidAt ? (
          <p
            className={cn(styles.status, {
              [styles.positive]: isPaid
            })}
          >
            {formatDate(paidAt)}
          </p>
        ) : (
          <p
            className={cn(styles.status, {
              [styles.negative]: !isPaid
            })}
          >
            Not Paid
          </p>
        )}
      </div>
    </div>
  );
}
