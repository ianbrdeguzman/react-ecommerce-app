import { useAppDispatch } from '../redux/hooks';
import { cartSlice } from '../redux/features/cartSlice';
import { Product } from '../redux/types';
import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './Aside.module.css';
import { useNavigate } from 'react-router-dom';

interface Inputs {
  qty: number;
}

interface Props {
  product: Product;
}

export function Aside({ product }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = async (data) => {
    const productWithQty = { ...product, qty: data.qty };
    dispatch(cartSlice.actions.add(productWithQty));
    navigate('/cart');
  };

  return (
    <div className={styles.container}>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.delivery}>
        <span>FREE Delivery</span> Wednesday June 1st
      </p>
      <p className={styles.stock}>
        {product.stock === 0 ? 'Out of Stock' : 'In Stock'}
      </p>
      <form className={styles.quantity} onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.selectContainer}>
          <p>Qty:</p>
          {product.stock > 0 ? (
            <select
              {...register('qty', { valueAsNumber: true })}
              className={styles.select}
            >
              {[...Array(product.stock)].map((i, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          ) : (
            <p>Out of stock</p>
          )}
        </div>
        <button
          type="submit"
          disabled={product.stock === 0}
          className={styles.button}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </form>
    </div>
  );
}
