import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from './CheckoutSteps.module.css';

interface Props {
  step: number;
  className?: string;
}

export function CheckoutSteps({ step, className }: Props) {
  return (
    <header className={cn(styles.container, className)}>
      <Link to="/">
        <img
          src="../../src/assets/amazon-logo.png"
          alt="E-Commerce App Logo"
          className={styles.logo}
        />
      </Link>
      <div className={styles.checkout}>
        <Link
          to="/cart"
          className={cn(styles.steps, { [styles.active]: step >= 1 })}
        >
          CART
        </Link>
        <Link
          to="/shipping"
          className={cn(styles.steps, { [styles.active]: step >= 2 })}
        >
          ADDRESS
        </Link>
        <Link
          to="/payment"
          className={cn(styles.steps, { [styles.active]: step >= 3 })}
        >
          PAYMENT
        </Link>
        <Link
          to="/place-order"
          className={cn(styles.steps, { [styles.active]: step >= 4 })}
        >
          PLACE ORDER
        </Link>
      </div>
    </header>
  );
}
