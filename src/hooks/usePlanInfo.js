import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const usePlanInfo = () => {
  const [planInfo, setPlanInfo] = useState([])

  const { id } = useParams();

  const getPlanInfo = async () => {
    const url = `https://mealstack-backend.herokuapp.com/plans/${id}`;

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlanInfo(json);
  }
  useEffect(() => { getPlanInfo()}, []);

  return {planInfo, setPlanInfo}

  }

export default usePlanInfo;