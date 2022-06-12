import { Ad } from '../components/Ad';
import { CheckoutSteps } from '../components/CheckoutSteps';

import styles from './PaymentSelectionPage.module.css';

export default function PaymentSelectionPage() {
  return (
    <div className={styles.container}>
      <CheckoutSteps step={2} className={styles.header} />
      <h1 className={styles.title}>Select payment method</h1>
      <Ad className={styles.ad} />
      <form className={styles.form}>
        <label htmlFor="paypal" className={styles.label}>
          <input type="radio" name="method" id="paypal" value="paypal" />
          <img
            src="../../src/assets/paypal-logo.png"
            alt="PayPal"
            className={styles.paypalLogo}
          />
        </label>
        <label htmlFor="stripe" className={styles.label}>
          <input type="radio" name="method" id="stripe" value="stripe" />
          <img
            src="../../src/assets/stripe-logo.png"
            alt="Stripe"
            className={styles.stripeLogo}
          />
        </label>
        <button type="submit" className={styles.button}>
          Continue
        </button>
      </form>
    </div>
  );
}
