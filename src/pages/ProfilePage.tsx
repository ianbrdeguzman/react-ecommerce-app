import { useAppSelector } from '../redux/hooks';
import styles from './ProfilePage.module.css';

export default function Profile() {
  const handleOnSubmit = () => {
    console.log('update profile');
  };

  const handleOnSignOut = () => {
    console.log('sign out');
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Manage your account</h1>
        <form onSubmit={handleOnSubmit}>
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
            Update your account
          </button>
        </form>
        <button
          type="button"
          className={styles.button}
          onClick={handleOnSignOut}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
