import { Outlet } from 'react-router';
import { useContext } from 'react';
import { userContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

export default function LoginRouter() {
  const { user } = useContext(userContext);
  let navigate = useNavigate();

  if (user) {
    navigate('/');
  }

  return <Outlet />;
}
