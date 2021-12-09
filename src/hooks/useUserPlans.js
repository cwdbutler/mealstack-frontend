import { useState, useEffect } from 'react';

const useUserPlans = (userId) => {
  const [loading, setLoading] = useState(true);
  const [plansList, setPlansList] = useState([]);

  const getUserPlans = async (userId) => {
    const url = `https://mealstack-backend.herokuapp.com/user/${userId}/plans`;

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlansList(json);
    setLoading(false);
  };
  useEffect(() => getUserPlans(userId), [userId]);
  return [plansList, loading];
};

export default useUserPlans;
