import RecipeDisplayer from "./RecipeDisplayer";
import { Center, Input, Box, Grid, GridItem, Button} from '@chakra-ui/react';
import { useState } from 'react';

function RecipeFilter(){

    const [filterParams, setFilterParams] = useState('')

    return(
      <> 
      <div overflow="hidden" >
      <Center >
        <Input variant="outline" placeholder="What are you craving..." width={480} mt={30} mb={30} backgroundColor="gray.50" color="black.500"
          border={500} onChange={event => {setFilterParams(event.target.value)}} isInvalid
          errorBorderColor='teal.200' focusBorderColor="teal.600" borderRadius={5}/>
      </Center>
      <Grid templateColumns="repeat(11, 1fr)"
      gap={5} h="200px">
      
        <GridItem colSpan={3}>
          <Box m={3}>
            Place meal 1 here
          </Box> 
        </GridItem >
        <GridItem colSpan={3}>
          <Box m={3}>
            Place meal 2 here
          </Box> 
        </GridItem>
        <GridItem colSpan={3}>
          <Box m={3}>
            Place meal 3 here
          </Box> 
        </GridItem>
        <GridItem colSpan={2}>
          <Button>
            Create Mealplan
          </Button> 
        </GridItem>
      </Grid>
      <RecipeDisplayer filter={filterParams}/> 
      </div>
      </>
    )

}

export default RecipeFilter