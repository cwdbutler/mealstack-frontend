import { useState, useEffect } from 'react';

const useSearch = (params) => {
  const [plansList, setPlansList] = useState([]);

  const getFilteredPlans = async (params) => {
    let calories = params.get('calories');
    let carbs = params.get('carbs');
    let protein = params.get('protein');
    let fats = params.get('fat');

    const url = `https://mealstack-backend.herokuapp.com/plans/search/${calories}&${carbs}&${protein}&${fats}`;

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlansList(json);
  };

  useEffect(() => getFilteredPlans(params), [params]);

  return [plansList, getFilteredPlans];
};

export default useSearch;
