import { useState, useEffect } from 'react';

const useRecipeList = (filterParam) => {
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(true);



  const getAllRecipes = async (filterParam) => {
    const url = 'https://mealstack-backend.herokuapp.com/recipes/filter'

    const res = await fetch(url, { method: 'POST', body: new URLSearchParams({"label": filterParam})});
    const json = await res.json();

    setRecipeList(json);
    setLoading(false);
  }
  useEffect(() => getAllRecipes(filterParam), [filterParam]);

  return [recipeList, loading];
};

export default useRecipeList;