import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
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
        <h1 className={styles.title}>Create account</h1>
        <form>
          <label htmlFor="name" className={styles.label}>
            Your Name
            <input type="text" name="name" id="name" className={styles.input} />
          </label>
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
          <label htmlFor="confirm" className={styles.label}>
            Password again
            <input
              type="password"
              name="confirm"
              id="confirm"
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.button}>
            Create your Amazon account
          </button>
        </form>
        <p className={styles.condition}>
          By creating an account, you agree to Amazon's{' '}
          <span>Conditions of Use</span> and <span>Privacy Notice.</span>
        </p>
      </div>
      <div className={styles.footer}>
        <p>Already have an account?</p>
        <Link to="/login">
          <p className={styles.link}>Sign In</p>
        </Link>
      </div>
    </div>
  );
}
