import { useState, useEffect } from 'react';

const useSearch = (params) => {
  const [loading, setLoading] = useState(true);
  const [plansList, setPlansList] = useState([]);

  const getFilteredPlans = async (params) => {
    let calories = params.get('calories');
    let carbs = params.get('carbs');
    let protein = params.get('protein');
    let fat = params.get('fat');
    let dairyFree = params.get('dairyFree');
    let glutenFree = params.get('glutenFree');
    let kosher = params.get('kosher');
    let peanutFree = params.get('peanutFree');
    let porkFree = params.get('porkFree');
    let vegan = params.get('vegan');
    let vegetarian = params.get('vegatarian');

    const url = `https://mealstack-backend.herokuapp.com/plans/search`;

    let fetchBody = {
      "calories": calories != null ? calories : undefined,
      "carbs": carbs != null ? carbs : undefined,
      "protein": protein != null ? protein : undefined,
      "fat": fat != null ? fat : undefined,
      "dairyFree": dairyFree != null && dairyFree? dairyFree : undefined,
      "glutenFree": glutenFree != null && glutenFree? glutenFree : undefined,
      "kosher": kosher != null ? kosher && kosher: undefined,
      "peanutFree": peanutFree != null && peanutFree? peanutFree : undefined,
      "porkFree": porkFree != null && porkFree? porkFree : undefined,
      "vegan": vegan != null ? vegan && vegan: undefined,
      "vegetarian": vegetarian != null && vegetarian? vegetarian : undefined,
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
