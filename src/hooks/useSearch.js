import { useState, useEffect } from 'react';

const useSearch = (params) => {
  const [loading, setLoading] = useState(true);
  const [plansList, setPlansList] = useState([]);

  const getFilteredPlans = async (params) => {
    let calories = params.get('calories');
    let carbs = params.get('carbs');
    let protein = params.get('protein');
    let fat = params.get('fat');

    const url = `https://mealstack-backend.herokuapp.com/plans/search`;

    let fetchBody = {
      "calories": calories != null ? calories : undefined,
      "carbs": carbs != null ? carbs : undefined,
      "protein": protein != null ? protein : undefined,
      "fat": fat != null ? fat : undefined
    };

    let res;
    try {
      res = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fetchBody)
      });
    } catch (err) {
      res = new Response(JSON.stringify({ error: 'true' }));
    }
    const json = await res.json();
    const body = await json.body;
    
    setPlansList(body);
    setLoading(false);
  };

  useEffect(() => getFilteredPlans(params), [params]);

  return [plansList, loading, getFilteredPlans];
};

export default useSearch;
