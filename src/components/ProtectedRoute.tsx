import { useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { userSlice } from '../redux/features/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { User } from '../redux/types';
import { Storage } from '../utils/storage';

export function ProtectedRoute() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { user } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    if (!user) {
      const rawUser = Storage.load('user');
      const user: User = rawUser ? JSON.parse(rawUser) : null;
      if (user) {
        dispatch(userSlice.actions.login(user));
      } else {
        navigate({
          pathname: '/signin',
          search: `?redirect=${pathname}`
        });
      }
    }
  }, [user]);

  return <Outlet />;
}
