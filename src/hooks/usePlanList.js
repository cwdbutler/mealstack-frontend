import { useState, useEffect } from 'react';

const usePlanList = () => {
  const [plansList, setPlansList] = useState([]);

  const getAllPlans = async () => {
    const url = 'https://mealstack-backend.herokuapp.com/plans';

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlansList(json[0]);
  };

  useEffect(() => getAllPlans(), []);

  return [plansList];
};

export default usePlanList;
