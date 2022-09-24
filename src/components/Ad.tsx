import cn from 'classnames';
import image from '../assets/ad.png?url';

import styles from './Ad.module.css';

interface Props {
  className?: string;
}

export function Ad({ className }: Props) {
  return (
    <div className={cn(styles.container, className)}>
      <img src={image} alt="Ad" />
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
