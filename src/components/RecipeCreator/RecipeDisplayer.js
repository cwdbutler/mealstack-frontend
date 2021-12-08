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
    {/* <Grid
      templateColumns="repeat(6, 1fr)"
      gap={10}
      templateRows="repeat(4, 1fr)"
    > */}
    <div style={{ flexWrap: "wrap", display: "flex", justifyContent: "space-evenly", alignContent: "center"}}>

      {recipes}
      {/* {recipes[0]}
      {recipes[1]}
      {recipes[2]}
      {recipes[3]}
      {recipes[4]}
      {recipes[5]} */}

    {/* </Grid> */}

    </div>
    </>
  ) 
}

export default RecipeDisplayer