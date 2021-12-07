import Recipe from "./Recipe"
import { Grid } from '@chakra-ui/react'

function RecipeDisplayer(props){

  const { currentSelected, updateSelected } = props  

 
    const recipes = props.filteredList.map((data) => {
  
    const key = `recipe-${data.id}`
    return <Recipe key={key} currentSelected={currentSelected} updateSelected={updateSelected} recipe={data}  /> 
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