import { useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

export function ProtectedRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    if (!user) {
      navigate({
        pathname: '/login',
        search: `?redirect=${pathname}`
      });
    }
  }, [user]);

  return <Outlet />;
}
