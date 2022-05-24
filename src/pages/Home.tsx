import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Slider />
    </div>
  );
}
