import { ProductList } from '../components/ProductList';
import { Slider } from '../components/Slider';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Slider />
      <ProductList />
    </div>
  );
}
