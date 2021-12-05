import { useState, useEffect } from 'react';

const usePlanInfo = (id) => {
  const [planInfo, setPlanInfo] = useState();

  const getPlanInfo = async (id) => {
    console.log('getting plan info 2');
    const url = `https://mealstack-backend.herokuapp.com/plans/${id}`;

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlanInfo(json);
  };

  useEffect(() => getPlanInfo(id), [id]);

  return [planInfo];
};

export default usePlanInfo;
