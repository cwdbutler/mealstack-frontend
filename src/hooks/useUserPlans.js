import { useState, useEffect } from 'react';

const useUserPlans = (userId) => {
  const [loading, setLoading] = useState(true);
  const [plansList, setPlansList] = useState([]);

  const getUserPlans = async (userId) => {
    const url = `http://localhost:4000/user/2/plans`;

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlansList(json);
    setLoading(false);
  };
  useEffect(() => getUserPlans(userId), [userId]);
  return [plansList, loading];
};

export default useUserPlans;
