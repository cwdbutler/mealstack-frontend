import Recipe from "./Recipe"

function RecipeDisplayer(){
  let recipes = [1,2,3]

  let display = recipes.map(() => {
    return  <Recipe></Recipe>
  });

  return <div> {display} </div>
}

export default RecipeDisplayer