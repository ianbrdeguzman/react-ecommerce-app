import { OrderHistoryItem } from '../components/OrderHistoryItem';
import styles from './OrderHistoryPage.module.css';

export default function OrderHistoryPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Orders</h1>
      <OrderHistoryItem />
    </div>
  );
}
