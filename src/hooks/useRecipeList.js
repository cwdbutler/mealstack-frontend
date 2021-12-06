import { useState, useEffect } from 'react';

const useRecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  const getAllRecipes = async () => {
    const url = 'https://mealstack-backend.herokuapp.com/recipes';

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setRecipeList(json);
  }
  useEffect(() => getAllRecipes(), []);

  return [recipeList];
};

export default useRecipeList;