import { useState, useEffect } from 'react';

const useSearch = (params) => {
  const [loading, setLoading] = useState(true);
  const [plansList, setPlansList] = useState([]);

  const getFilteredPlans = async (params) => {
    let calories = params.get('calories');
    let carbs = params.get('carbs');
    let protein = params.get('protein');
    let fats = params.get('fat');

    const url = `https://mealstack-backend.herokuapp.com/plans/search/${calories}&${carbs}&${protein}&${fats}`;

    let res;
    try {
      res = await fetch(url, { method: 'GET' });
    } catch (err) {
      res = new Response(JSON.stringify({ error: 'true' }));
    }
    const json = await res.json();

    setPlansList(json);
    setLoading(false);
  };

  useEffect(() => getFilteredPlans(params), [params]);

  return [plansList, loading, getFilteredPlans];
};

export default useSearch;
