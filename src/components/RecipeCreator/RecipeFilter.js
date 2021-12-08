import RecipeDisplayer from "./RecipeDisplayer";
import PlanCreator from "./PlanCreator";
import useRecipeList from "../../hooks/useRecipeList";
import { Heading, Center, Input, Spinner} from '@chakra-ui/react';
import { useState } from 'react';


function RecipeFilter(){

    const [filterParams, setFilterParams] = useState('')
    const [recipeList, loading] = useRecipeList(filterParams);
    const [selectedRecipes, setSelectedRecipes] = useState([]);

    if (loading) {
      return (
        <Center h="100%" mt={5}>
          <Spinner size="xl" thickness="2px" speed="0.65s" color="teal.200" />
        </Center>
      );
    }

    if (loading) {
      return (
        <Center h="100%" mt={5}>
          <Spinner size="xl" thickness="2px" speed="0.65s" color="teal.200" />
        </Center>
      );
    }

    const NoResultsFound = () => (
      <Center h="100%" mt={8} >
        <Heading> No results found </Heading>
      </Center>
    )

    return(
      <> 
      <div style={{height: "calc(100% - 3em)"}}>
        <div style={{height: "calc(40%)", position: "sticky"}} id="fixed-top-half"> 
          <div style={{height: "calc(50%)", display: "flex", justifyContent: "space-around"}} > 
            {<PlanCreator
              filteredList={recipeList} 
              updateSelected={setSelectedRecipes} 
              currentSelected={selectedRecipes} 
              />}
          </div>
          <div style={{height: "calc(50%)"}}>
          <Center mt={7}>
              <Heading size="md">Filter by food name</Heading>
          </Center>
          <Center >
              <Input variant="outline" placeholder="What are you craving..." width={480} mt={30} mb={30} backgroundColor="gray.50" color="black.500"
              border={500} onChange={event => {setFilterParams(event.target.value)}} isInvalid
              errorBorderColor='teal.200' focusBorderColor="teal.600" borderRadius={5}/>
          </Center>
          </div>
        </div>
        <div style={{height: "auto"}} id="scrollable-bottom-half"> 
          {recipeList.length === 0 ? ( 
          <NoResultsFound/> 
          ) : ( 
                <div> 
                  <RecipeDisplayer 
                  updateSelected={setSelectedRecipes} 
                  currentSelected={selectedRecipes} 
                  filteredList={recipeList} 
                  /> 
                </div> 
              ) 
              }
        </div>
      </div>
      </>
    )
}

export default RecipeFilter