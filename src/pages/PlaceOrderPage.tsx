import { CheckoutSteps } from '../components/CheckoutSteps';
import { OrderSummary } from '../components/OrderSummary';
import { useCart } from '../redux/hooks/useCart';

import styles from './PlaceOrderPage.module.css';

export default function PlaceOrderPage() {
  const { cartPrice, cartLength } = useCart();
  /**
   * TODO: Check if cart is not empty
   * and shippingDetails is provided
   * and payment is selected
   */

  return (
    <div className={styles.container}>
      <CheckoutSteps step={4} />
      <h1 className={styles.title}>Review your order</h1>
      <div className={styles.content}>
        <div className={styles.details}>
          <div>order details</div>
          <div>order summary</div>
        </div>
        <OrderSummary
          cartLength={cartLength}
          cartPrice={cartPrice}
          shippingPrice={10}
          taxPrice={10}
          totalPrice={120}
        />
      </div>
    </div>
  );
}
