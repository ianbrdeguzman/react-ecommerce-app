import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSlice } from '../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUpdateMutation } from '../redux/services/userApi';
import { Alert } from '../components/Alert';
import { cartSlice } from '../redux/features/cartSlice';

import styles from './ProfilePage.module.css';

interface Inputs {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userSlice);
  const [update, { isLoading, isError, isSuccess }] = useUpdateMutation();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors }
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = async ({
    name,
    email,
    password
  }) => {
    if (user) {
      const data = await update({
        userId: user._id,
        name: name ?? '',
        email: email ?? '',
        password: password ?? '',
        token: user.token
      }).unwrap();

      dispatch(userSlice.actions.login(data));
    }
  };

  const handleOnSignOut = () => {
    dispatch(userSlice.actions.logout());
    dispatch(cartSlice.actions.clearShippingDetails());
    navigate('/');
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user?.name,
        email: user?.email,
        password: '',
        confirm: ''
      });
    }
  }, [isSuccess, isError, user]);

  return (
    <div className={styles.container}>
      {isError && (
        <Alert
          type="error"
          title="There was a problem"
          text="Something went wrong"
        />
      )}
      {isSuccess && (
        <Alert
          type="success"
          title="Success"
          text="User profile successfully updated"
        />
      )}
      <div className={styles.content}>
        <h1 className={styles.title}>Manage your account</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <label htmlFor="name" className={styles.label}>
            Your Name
            <input
              type="text"
              {...register('name', {
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
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
          <label htmlFor="email" className={styles.label}>
            E-mail Address
            <input
              type="email"
              {...register('email', {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email.'
                }
              })}
              className={styles.input}
            />
          </label>
          <label htmlFor="password" className={styles.label}>
            Password
            <input
              type="password"
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'Password at least 6 characters'
                }
              })}
              className={styles.input}
            />
          </label>
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
          <label htmlFor="confirm" className={styles.label}>
            Password again
            <input
              type="password"
              {...register('confirm', {
                validate: {
                  dirty: (v) => {
                    if (v !== getValues('password'))
                      return 'Password does not match';
                  }
                }
              })}
              className={styles.input}
            />
          </label>
          {errors.confirm && (
            <span className={styles.error}>{errors.confirm.message}</span>
          )}
          <button disabled={isLoading} type="submit" className={styles.button}>
            {isLoading ? 'Loading...' : 'Update your account'}
          </button>
        </form>
        <button
          disabled={isLoading}
          type="button"
          className={styles.button}
          onClick={handleOnSignOut}
        >
          {isLoading ? 'Loading...' : 'Sign out'}
        </button>
      </div>
    </div>
  );
}
