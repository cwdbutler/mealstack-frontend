import { useState, useEffect } from 'react';

const usePlanCreator = (planParams) => {
  // const [recipeList, setRecipeList] = useState([]);
  const [createdPlan, setCreatedPlan] = useState([])
  const [loading, setLoading] = useState(true);

  const getCreatedPlan = async (planParams) => {
    // https://mealstack-backend.herokuapp.com/recipes/new
    const url = 'http://localhost:3000/recipes/new'

    const res = await fetch(url, {
      method: 'POST', 
      body: new URLSearchParams({
        'label': planParams.label,
        'first': planParams.first, 
        'second': planParams.second, 
        'third': planParams.third
      })
    })
    const json = await res.json();

    setCreatedPlan(json)
    setLoading(false);
  }

  return [createdPlan, setCreatedPlan, loading];
};

export default usePlanCreator;