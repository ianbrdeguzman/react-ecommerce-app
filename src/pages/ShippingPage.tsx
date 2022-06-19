import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CheckoutSteps } from '../components/CheckoutSteps';
import { cartSlice } from '../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ShippingDetails } from '../redux/types';

import styles from './ShippingPage.module.css';

export default function ShippingPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { shippingDetails, cartItems } = useAppSelector(
    (state) => state.cartSlice
  );
  const { register, handleSubmit, reset } = useForm<ShippingDetails>({
    defaultValues: {
      fullname: shippingDetails?.fullname,
      addressOne: shippingDetails?.addressOne,
      addressTwo: shippingDetails?.addressTwo,
      city: shippingDetails?.city,
      postal: shippingDetails?.postal,
      phone: shippingDetails?.phone
    }
  });

  const handleOnSubmit: SubmitHandler<ShippingDetails> = (data) => {
    dispatch(cartSlice.actions.addShippingDetails(data));
    navigate('/payment');
  };

  useEffect(() => {
    reset({
      fullname: shippingDetails?.fullname,
      addressOne: shippingDetails?.addressOne,
      addressTwo: shippingDetails?.addressTwo,
      city: shippingDetails?.city,
      postal: shippingDetails?.postal,
      phone: shippingDetails?.phone
    });
  }, [shippingDetails]);

  useEffect(() => {
    dispatch(cartSlice.actions.loadShippingDetails());
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, []);

  return (
    <div className={styles.container}>
      <CheckoutSteps step={2} className={styles.header} />
      <div className={styles.content}>
        <h1 className={styles.title}>Select a shipping address</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <label htmlFor="fullname" className={styles.label}>
            Full name (First and Last name)
            <input
              type="text"
              {...register('fullname', {
                required: 'Please enter your name',
                maxLength: {
                  value: 30,
                  message: 'Name at most 30 characters'
                },
                minLength: {
                  value: 3,
                  message: 'Name at least 3 characters'
                }
              })}
              className={styles.input}
            />
          </label>
          <label htmlFor="addressOne" className={styles.label}>
            Address Line 1 (or Company Name)
            <input
              type="text"
              {...register('addressOne', {
                required: 'Please enter your address',
                minLength: {
                  value: 3,
                  message: 'Address at least 3 characters'
                }
              })}
              className={styles.input}
            />
          </label>
          <label htmlFor="addressTwo" className={styles.label}>
            Address Line 2 (optional)
            <input
              type="text"
              {...register('addressTwo')}
              className={styles.input}
            />
          </label>
          <label htmlFor="city" className={styles.label}>
            City
            <input type="text" {...register('city')} className={styles.input} />
          </label>
          <label htmlFor="postal" className={styles.label}>
            Postal Code/Zip
            <input
              type="text"
              {...register('postal', {
                pattern: {
                  value: /[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]/,
                  message: 'Please enter a valid postal code'
                }
              })}
              className={styles.input}
            />
          </label>
          <label htmlFor="phone" className={styles.label}>
            Telephone number
            <input
              type="text"
              {...register('phone', {
                pattern: {
                  value: /[0-9]{3}[0-9]{3}[0-9]{4}/,
                  message: 'Please enter a valid postal code'
                }
              })}
              className={styles.input}
            />
            <span className={styles.disclaimer}>
              May be printed on the label to assist delivery.
            </span>
          </label>
          <button type="submit" className={styles.button}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
