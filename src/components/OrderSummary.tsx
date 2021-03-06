import { OnApproveData } from '@paypal/paypal-js';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Alert } from './Alert';
import styles from './OrderSummary.module.css';

interface Props {
  cartLength: number;
  cartPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid?: boolean;
  onClick: (onApproveData: OnApproveData) => void;
  isError?: boolean;
}

export function OrderSummary({
  cartLength,
  cartPrice,
  shippingPrice,
  taxPrice,
  totalPrice,
  isPaid,
  onClick,
  isError
}: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Order Summary</h3>
      <div className={styles.detail}>
        <p>Items ({cartLength}):</p>
        <p>${cartPrice}</p>
      </div>
      <div className={styles.detail}>
        <p>Shipping:</p>
        <p>${shippingPrice}</p>
      </div>
      <div className={styles.detail}>
        <p>Tax:</p>
        <p>${taxPrice}</p>
      </div>
      <div className={styles.detail}>
        <p>Order Total:</p>
        <p>${totalPrice}</p>
      </div>
      {isError && (
        <Alert type="error" title="Something went wrong." text=""></Alert>
      )}
      {!isPaid && (
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: totalPrice.toString()
                  }
                }
              ]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order!.capture().then(() => data && onClick(data));
          }}
          className={styles.button}
        />
      )}
    </div>
  );
}
