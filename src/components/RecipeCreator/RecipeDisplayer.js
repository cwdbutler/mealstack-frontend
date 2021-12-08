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
    <div style={{flexWrap: "wrap", display: "flex", justifyContent: "space-evenly", alignContent: "center"}}>

      {recipes}

    </div>
    </>
  ) 
}

export default RecipeDisplayer