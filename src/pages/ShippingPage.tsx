import { Link } from 'react-router-dom';
import styles from './ShippingPage.module.css';

export default function ShippingPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="../../src/assets/amazon-logo.png"
          alt="E-Commerce App Logo"
          className={styles.logo}
        />
        <div className={styles.checkoutSteps}>
          <Link to="/cart" className={styles.steps}>
            CART
          </Link>
          <Link to="/shipping" className={styles.steps}>
            ADDRESS
          </Link>
          <Link to="/payment" className={styles.steps}>
            PAYMENT
          </Link>
          <Link to="/order" className={styles.steps}>
            PLACE ORDER
          </Link>
        </div>
      </header>
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
