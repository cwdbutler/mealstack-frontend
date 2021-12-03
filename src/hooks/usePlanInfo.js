import { useState, useEffect } from 'react';

const usePlanInfo = () => {
  const [planInfo, setPlanInfo] = useState([])

  const getPlanInfo = async (id) => {
    const url = `https://mealstack-backend.herokuapp.com/plans/${id}`;

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlanInfo(json);
  }
  useEffect(() => getPlanInfo(), []);
  
  return [planInfo]
  }

export default usePlanInfo;