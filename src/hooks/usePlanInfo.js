import { useState, useEffect } from 'react';

const usePlanInfo = (id) => {
  const [loading, setLoading] = useState(true);
  const [planInfo, setPlanInfo] = useState();

  const getPlanInfo = async (id) => {
    const url = `https://mealstack-backend.herokuapp.com/plans/${id}`;

    let res;
    try {
      res = await fetch(url, { method: 'GET' });
    } catch (err) {
      res = new Response(JSON.stringify({ error: 'true' }));
    }
    const json = await res.json();

    setPlanInfo(json);
    setLoading(false);
  };

  useEffect(() => getPlanInfo(id), [id]);

  return [planInfo, loading];
};

export default usePlanInfo;
