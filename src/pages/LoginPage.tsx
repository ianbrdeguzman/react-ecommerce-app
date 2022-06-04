import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '../components/Alert';
import { userSlice } from '../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useSignInMutation } from '../redux/services/userApi';
import { useForm, SubmitHandler } from 'react-hook-form';

import styles from './LoginPage.module.css';

interface Inputs {
  email: string;
  password: string;
}

interface Error {
  data: { message: string };
  status: number;
}

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.userSlice);
  const [signIn, { isLoading, isSuccess }] = useSignInMutation();
  const [error, setError] = useState<Error>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      const data = await signIn({
        email,
        password
      }).unwrap();
      dispatch(userSlice.actions.login(data));
      navigate('/');
    } catch (err) {
      setError(err as unknown as Error);
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <img
          src="./src/assets/amazon-logo.png"
          alt="E-Commerce Logo"
          className={styles.logo}
        />
      </Link>
      {error && (
        <Alert
          type="error"
          title="There was a problem"
          text={error.data.message}
        />
      )}
      <div className={styles.content}>
        <h1 className={styles.title}>Sign In</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <label htmlFor="email" className={styles.label}>
            E-mail Address
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email.'
                }
              })}
              className={styles.input}
              required
            />
          </label>
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
          <label htmlFor="password" className={styles.label}>
            Password
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password atleast 6 characters'
                },
                maxLength: 30
              })}
              className={styles.input}
              required
            />
          </label>
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
          <button disabled={isLoading} type="submit" className={styles.button}>
            {isLoading || isSuccess ? 'Loading...' : 'Continue'}
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <p>New to Amazon?</p>
        <Link to="/register">
          <button disabled={isLoading} className={styles.link}>
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}
