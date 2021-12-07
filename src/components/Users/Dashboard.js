import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context';

export default function Dashboard() {
  const { user } = useContext(userContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  return <h1>dashboard</h1>;
}
