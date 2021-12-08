import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const usePlanInfo = () => {
  const [loading, setLoading] = useState(true);
  const [planInfo, setPlanInfo] = useState();

  let { id } = useParams()

  const getPlanInfo = async (id) => {
    //`http://localhost:4000/plans/${id}`
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
