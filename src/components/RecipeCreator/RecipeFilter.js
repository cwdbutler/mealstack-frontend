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
      
      {/* <Flex justify="right" m={5}>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                            Calories
                </Badge>
                <StatLabel>Total Calories</StatLabel>
                  <StatNumber>0</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="orange">
                            Fat
                </Badge>
                <StatLabel>Total Fat </StatLabel>
                  <StatNumber>0</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="pink">
                            Carbs
                </Badge>
                <StatLabel>Total Carbs</StatLabel>
                  <StatNumber>0</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="red">
                            Protein
                </Badge>
                <StatLabel>Total Protein</StatLabel>
                  <StatNumber>0</StatNumber>
                </Stat>       
        <Button>
              Create Mealplan
        </Button>        
      </Flex> */}
      {/* <Grid templateColumns="repeat(6, 1fr)"
      templateRows="repeat(4, 1fr)"
      gap={10}
      >
        <GridItem m={10} border="2px" borderColor="gray.200" borderRadius="10" colSpan={2} rowSpan={8}>
          <Box m={3}>
            Place meal 1 here
          </Box> 
        </GridItem >
        <GridItem m={10} border="2px" borderColor="gray.200" borderRadius="10" colSpan={2} rowSpan={8}>
          <Box m={3}>
            Place meal 2 here
          </Box> 
        </GridItem>
        <GridItem m={10} border="2px" borderColor="gray.200" borderRadius="10" colSpan={2} rowSpan={2}>
          <Box m={3}>
            Place meal 3 here
          </Box> 
        </GridItem>
          
      </Grid> */}
      <RecipeDisplayer filter={filterParams}/> 
      
      </>
    )

}

export default RecipeFilter