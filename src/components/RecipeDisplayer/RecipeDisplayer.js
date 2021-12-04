import Recipe from "./Recipe"
import useRecipeList from "../../hooks/useRecipeList";


function RecipeDisplayer(){
  const [recipeList] = useRecipeList();


  const recipes = recipeList.map((data) => {

    const key = `recipe-${data.id}`
    return  <Recipe recipe={data} key={key}/>
  });

  return <div> {recipes} </div>
}

export default RecipeDisplayer