import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img
          src="./src/assets/amazon-logo.png"
          alt="E-Commerce Logo"
          className={styles.logo}
        />
      </Link>
      <div className={styles.content}>
        <h1 className={styles.title}>Sign In</h1>
        <form>
          <label htmlFor="email" className={styles.label}>
            E-mail Address
            <input
              type="email"
              name="email"
              id="email"
              className={styles.input}
            />
          </label>
          <label htmlFor="password" className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.button}>
            Continue
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <p>New to Amazon?</p>
        <Link to="/register">
          <button className={styles.link}>Create your Amazon account</button>
        </Link>
      </div>
    </div>
  );
}
