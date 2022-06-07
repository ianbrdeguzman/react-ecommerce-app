import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignupMutation } from '../redux/services/userApi';
import { Alert } from '../components/Alert';

import styles from './RegisterPage.module.css';

interface Inputs {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

interface Error {
  error: {
    message: string;
  };
}

export default function RegisterPage() {
  const [signup, { isLoading, isSuccess, error, isError }] =
    useSignupMutation();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors }
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = async ({
    name,
    email,
    password
  }) => {
    await signup({
      name,
      email,
      password
    });
  };

  useEffect(() => {
    reset();
  }, [isError, isSuccess]);

  return (
    <div className={styles.container}>
      <Link to="/">
        <img
          src="./src/assets/amazon-logo.png"
          alt="E-Commerce Logo"
          className={styles.logo}
        />
      </Link>
      {isSuccess && (
        <Alert
          type="success"
          title="Success"
          text="You have successfully registered"
        />
      )}
      {error && (
        <Alert
          type="error"
          title="There was a problem"
          text={
            'data' in error
              ? (error.data as unknown as Error).error.message
              : ''
          }
        />
      )}
      <div className={styles.content}>
        <h1 className={styles.title}>Create account</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <label htmlFor="name" className={styles.label}>
            Your Name
            <input
              type="text"
              {...register('name', {
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
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
          <label htmlFor="email" className={styles.label}>
            E-mail Address
            <input
              type="email"
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email.'
                }
              })}
              className={styles.input}
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
                required: 'Please enter your password',
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
                required: 'Please confirm your password',
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
          <button type="submit" className={styles.button}>
            {isLoading ? 'Loading...' : 'Create your Amazon account'}
          </button>
        </form>
        <p className={styles.condition}>
          By creating an account, you agree to Amazon's{' '}
          <span>Conditions of Use</span> and <span>Privacy Notice.</span>
        </p>
      </div>
      <footer className={styles.footer}>
        <p>Already have an account?</p>
        <Link to="/login">
          <p className={styles.link}>Sign In</p>
        </Link>
      </footer>
    </div>
  );
}
