import cn from 'classnames';

import styles from './Alert.module.css';

interface Props {
  type: 'success' | 'warning' | 'error';
  title: string;
  text: string;
  className?: string;
}

export function Alert({ type, title, text, className }: Props) {
  return (
    <div
      className={cn(styles.container, className, {
        [styles.error]: type === 'error',
        [styles.warning]: type === 'warning',
        [styles.success]: type === 'success'
      })}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
