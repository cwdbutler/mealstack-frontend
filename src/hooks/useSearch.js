import { useState, useEffect } from 'react';

const useSearch = (props) => {
  const [plansList, setPlansList] = useState([]);

  const getFilteredPlans = async () => {
    const url = `https://mealstack-backend.herokuapp.com/plans/search/`;

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlansList(json);
  };

  useEffect(() => getFilteredPlans(), []);

  return [plansList];
};

export default useSearch;
