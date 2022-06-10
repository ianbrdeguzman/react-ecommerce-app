import styles from './Ad.module.css';

export function Ad() {
  return (
    <div className={styles.container}>
      <img src="../../src/assets/ad.png" alt="Ad" />
      <div className={styles.textContainer}>
        <p className={styles.text}>
          You could get <span>5% back at Amazon.ca</span>, grocery stores and
          restaurants for 6 months upon approval for the{' '}
          <b>Amazon.ca Rewards Mastercard.</b>
        </p>
        <p>
          Welcome offer on the first $3,000 in eligible purchases. See terms.
        </p>
      </div>
    </div>
  );
}
