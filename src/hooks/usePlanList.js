import { useState, useEffect } from 'react';

const usePlanList = () => {
  const [plansList, setPlansList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);

  const getAllPlans = async () => {
    const url = 'https://mealstack-backend.herokuapp.com/plans';

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setPlansList(json[0]);
    setRecipeList(json[1].recipes.recipe);
  }
  useEffect(() => getAllPlans(), []);

  return [plansList, recipeList];
};

export default usePlanList;
