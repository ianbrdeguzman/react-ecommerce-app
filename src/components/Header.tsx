import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { useCart } from '../redux/hooks/useCart';
import logo from '../../src/assets/amazon-logo.svg?url';

import styles from './Header.module.css';

export function Header() {
  const { cartLength } = useCart();
  const { user } = useAppSelector((state) => state.userSlice);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Not yet implemented');
  };

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link to="/">
          <img src={logo} alt="E-Commerce App Logo" className={styles.logo} />
        </Link>
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className={styles.input}
          />
          <button type="submit" className={styles.search} tabIndex={-1}>
            <AiOutlineSearch size={20} />
          </button>
        </form>
      </div>
      <div className={styles.buttons}>
        <Link to="/signin" className={styles.signin}>
          <p>
            Hello, <span>{user ? user.name : 'Sign in'}</span>
          </p>
          <p>
            <b> Accounts & Lists</b>
          </p>
        </Link>
        <Link to="/order-history" className={styles.order}>
          <p>Returns</p>
          <p>
            <b>& Orders</b>
          </p>
        </Link>
        <Link to="/cart" className={styles.cart}>
          <AiOutlineShoppingCart size={24} />
          <span className={styles.count}>{cartLength}</span>
        </Link>
      </div>
    </header>
  );
}
