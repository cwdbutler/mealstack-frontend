import RecipeDisplayer from "./RecipeDisplayer";
import PlanCreator from "./PlanCreator";
import useRecipeList from "../../hooks/useRecipeList";
import { Heading, Center, Input, Spinner} from '@chakra-ui/react';
import { useState } from 'react';


function RecipeFilter(){

    const [filterParams, setFilterParams] = useState('')
    const [recipeList, loading] = useRecipeList(filterParams);  
 

    // let filteredRecipes =  recipeList.filter((val)=> {
    //   if(filterParams === "") {
    //     return val
    //   } else if (val.label.toLowerCase().includes(filterParams.toLowerCase())){
    //     return val
    //   } 
    //   return false 
    // })


    // const SubpageTemplate = ({planCreator, filterInput, recipeDisplay}) => (
    //   <div style={{height: "calc(100% - 3em)"}}>
    //     <div style={{height: "calc(40%)", position: "sticky"}} id="fixed-top-half"> 
    //       <div style={{height: "calc(50%)"}} >{planCreator}</div>
    //       <div style={{height: "calc(50%)"}}>{filterInput}</div>
    //     </div>
    //     <div style={{height: "auto"}} id="scrollable-bottom-half"> 
    //       <div> {recipeDisplay} </div>
    //     </div>
    //   </div>
    // )


    // let FilterInput = () => {

    //   // const [filterParams, setFilterParams] = useState('')

    //   return (
    //   <>
    //   <Center mt={7}>
    //     <Heading size="md">Filter by name</Heading>
    //   </Center>
    //   <Center >
    //       <Input variant="outline" placeholder="What are you craving..." width={480} mt={30} mb={30} backgroundColor="gray.50" color="black.500"
    //       border={500} onChange={event => {setFilterParams(event.target.value)}} isInvalid
    //       errorBorderColor='teal.200' focusBorderColor="teal.600" borderRadius={5}/>
    //   </Center> 
    //   </>
    //   )

    // }


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

    // if(recipeList.length == 0) {
    //   return (
    //     <Center h="100%" mt={5} >
    //       <Heading> No results found </Heading>
    //     </Center>
    //   )
    // }


    return(
      <> 
      <div style={{height: "calc(100% - 3em)"}}>
        <div style={{height: "calc(40%)", position: "sticky"}} id="fixed-top-half"> 
          <div style={{height: "calc(50%)", display: "flex", justifyContent: "space-around"}} > {<PlanCreator filteredList={recipeList} />}</div>
          <div style={{height: "calc(50%)"}}>
          <Center mt={7}>
              <Heading size="md">Filter by name</Heading>
          </Center>
          <Center >
              <Input variant="outline" placeholder="What are you craving..." width={480} mt={30} mb={30} backgroundColor="gray.50" color="black.500"
              border={500} onChange={event => {setFilterParams(event.target.value)}} isInvalid
              errorBorderColor='teal.200' focusBorderColor="teal.600" borderRadius={5}/>
          </Center>
          </div>
        </div>
        <div style={{height: "auto"}} id="scrollable-bottom-half"> 
          {recipeList.length == 0 ? <NoResultsFound/>  : <div> <RecipeDisplayer filteredList={recipeList}/> </div>}
        </div>
      </div>


      {/* <PlanCreator filteredList={recipeList}/>
      <Center mt={7}>
              <Heading size="md">Filter by name</Heading>
      </Center>
      <Center >
          <Input variant="outline" placeholder="What are you craving..." width={480} mt={30} mb={30} backgroundColor="gray.50" color="black.500"
          border={500} onChange={event => {setFilterParams(event.target.value)}} isInvalid
          errorBorderColor='teal.200' focusBorderColor="teal.600" borderRadius={5}/>
      </Center>
      <RecipeDisplayer filteredList={recipeList} filterParams={filterParams}/> */}


      {/* <SubpageTemplate 
      planCreator = { <PlanCreator filteredList={recipeList} /> } 
      filterInput = { <FilterInput/> } 
      recipeDisplay = {  <RecipeDisplayer filteredList={recipeList}/> }
      /> */}

      </>
    )
}

export default RecipeFilter