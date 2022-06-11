import { CheckoutSteps } from '../components/CheckoutSteps';

import styles from './ShippingPage.module.css';

export default function ShippingPage() {
  return (
    <div className={styles.container}>
      <CheckoutSteps step={1} />
      <div className={styles.content}>
        <h1 className={styles.title}>Select a shipping address</h1>
        <form>
          <label htmlFor="name" className={styles.label}>
            Full name (First and Last name)
            <input type="text" className={styles.input} />
          </label>
          <label htmlFor="name" className={styles.label}>
            Address Line 1 (or Company Name)
            <input type="text" className={styles.input} />
          </label>
          <label htmlFor="name" className={styles.label}>
            Address Line 2 (optional)
            <input type="text" className={styles.input} />
          </label>
          <label htmlFor="name" className={styles.label}>
            City
            <input type="text" className={styles.input} />
          </label>
          <label htmlFor="name" className={styles.label}>
            Postal Code/Zip
            <input type="text" className={styles.input} />
          </label>
          <label htmlFor="name" className={styles.label}>
            Telephone number
            <input type="text" className={styles.input} />
            <span className={styles.disclaimer}>
              May be printed on the label to assist delivery.
            </span>
          </label>
          <button type="submit" className={styles.button}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
