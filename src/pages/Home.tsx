import { Header } from '../components/Header';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
