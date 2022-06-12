import { cartSlice, ProductWithQty } from '../redux/features/cartSlice';
import { useAppDispatch } from '../redux/hooks';

import styles from './CartItem.module.css';

interface Props {
  item: ProductWithQty;
}

export function CartItem({
  item: { _id, image, title, price, stock, qty }
}: Props) {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <p className={styles.price}>${price}</p>
      </div>
      <p className={styles.name}>{title}</p>
      <p className={styles.stock}>{stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
      <div className={styles.selectContainer}>
        <label className={styles.selectLabel}>
          Qty:
          <select
            name="qty"
            id="qty"
            className={styles.select}
            defaultValue={qty}
            onChange={(e) =>
              dispatch(
                cartSlice.actions.updateCartItem({
                  id: _id,
                  qty: +e.currentTarget.value
                })
              )
            }
          >
            {[...Array(stock)].map((i, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </label>
        <button
          className={styles.button}
          onClick={() => dispatch(cartSlice.actions.removeCartItem(_id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
