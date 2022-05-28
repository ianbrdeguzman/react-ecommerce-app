import { Ad } from '../components/Ad';
import { EmptyCart } from '../components/EmptyCart';
import styles from './CartPage.module.css';

export default function CartPage() {
  return (
    <div className={styles.container}>
      <Ad />
      <EmptyCart />
    </div>
  );
}
