import { Outlet } from 'react-router';
import { useContext, useEffect } from 'react';
import { userContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

export default function LoginRouter() {
  const { user } = useContext(userContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  });

  return <Outlet />;
}
