import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '../components/Alert';
import { authSlice } from '../redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useSignInMutation } from '../redux/services/user';
import { Storage } from '../utils/storage';
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
  const { user } = useAppSelector((state) => state.auth);
  const [signIn, { isLoading }] = useSignInMutation();

  const [inputs, setInputs] = useState<Inputs>({ email: '', password: '' });
  const [error, setError] = useState<Error>();

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signIn({
        email: inputs.email,
        password: inputs.password
      }).unwrap();
      dispatch(authSlice.actions.save(data));
      Storage.save('credentials', JSON.stringify(data));
      navigate('/');
    } catch (err) {
      setError(err as unknown as Error);
    } finally {
      setInputs({ email: '', password: '' });
    }
  };

  useEffect(() => {
    if (user) navigate('/profile');
  }, [user]);

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
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email" className={styles.label}>
            E-mail Address
            <input
              type="email"
              name="email"
              id="email"
              className={styles.input}
              onChange={handleOnChange}
              value={inputs.email}
            />
          </label>
          <label htmlFor="password" className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              onChange={handleOnChange}
              value={inputs.password}
            />
          </label>
          <button disabled={isLoading} type="submit" className={styles.button}>
            {isLoading ? 'Loading...' : 'Continue'}
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
