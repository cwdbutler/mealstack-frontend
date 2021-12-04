import Recipe from "./Recipe"
import useRecipeList from "../../hooks/useRecipeList";
import { VStack, Flex, Button, Box, Grid, GridItem, Center, NumberInputField, NumberInput, Input, Divider} from '@chakra-ui/react'


function RecipeDisplayer(props){
  const [recipeList] = useRecipeList();
  console.log(props.filter)


 

    let filteredRecipes =  recipeList.filter((val)=> {
      if(props.filterParams == "") {
        return val
      } else if (val.label.toLowerCase().includes(props.filter.toLowerCase())){
        return val
      }})
    
    console.log(filteredRecipes)

  
    
    const recipes = filteredRecipes.map((data) => {

    const key = `recipe-${data.id}`
    return filteredRecipes ? <Recipe recipe={data} key={key}/> : <> </>
  });

  return (
    <>
    
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