import Recipe from "./Recipe"
import PlanCreator from "./PlanCreator";
import useRecipeList from "../../hooks/useRecipeList";
import { Grid} from '@chakra-ui/react'

function RecipeDisplayer(props){
  const [recipeList] = useRecipeList();
  
 

    let filteredRecipes =  recipeList.filter((val)=> {
      if(props.filter === "") {
        return val
      } else if (val.label.toLowerCase().includes(props.filter.toLowerCase())){
        return val
      } 
        return val
    })
    

  
    
    const recipes = filteredRecipes.map((data) => {

    const key = `recipe-${data.id}`
    return filteredRecipes ? <Recipe recipe={data} key={key}/> : <> </>
  });

  return (
    <>
    <PlanCreator filterParams={props.filter} isMulti={true}/>
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={10}
      templateRows="repeat(4, 1fr)"
            
    >
      
      {recipes} 

    </Grid>
    </>
  ) 
}

export default RecipeDisplayer