import { ProductList } from '../components/ProductList';
import { Slider } from '../components/Slider';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Slider />
      <ProductList />
    </div>
  );
}
