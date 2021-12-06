import RecipeDisplayer from "./RecipeDisplayer";
import { Heading, Center, Input} from '@chakra-ui/react';
import { useState } from 'react';


function RecipeFilter(){

    const [filterParams, setFilterParams] = useState('')



    return(
      <> 
      
      <Center mt={7}>
              <Heading size="md">Filter by name</Heading>
      </Center>
      <Center >
          <Input variant="outline" placeholder="What are you craving..." width={480} mt={30} mb={30} backgroundColor="gray.50" color="black.500"
          border={500} onChange={event => {setFilterParams(event.target.value)}} isInvalid
          errorBorderColor='teal.200' focusBorderColor="teal.600" borderRadius={5}/>
      </Center>
      <RecipeDisplayer filter={filterParams}/> 
      
      </>
    )

}

export default RecipeFilter