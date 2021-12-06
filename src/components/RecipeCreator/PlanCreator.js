import useRecipeList from "../../hooks/useRecipeList"

import { useState } from "react"

import {
  Badge,
  Stat,
  StatLabel,
  StatNumber, 
  Grid,
  GridItem,
  Flex,
  Input, 
  Button
} from '@chakra-ui/react';

import Select  from 'react-select'


export default function PlanCreator(props) {
  const [recipeList] = useRecipeList()
  const [recipesSelected] = useState([])

  console.log(recipesSelected)


  let filteredRecipes =  recipeList.filter((val)=> {
    if(props.filterParams === "") {
      return val
    } else if (val.label.toLowerCase().includes(props.filterParams.toLowerCase())){
      return val
    }})




  return ( 
  
  <> 
  
  Plan form 
  <Grid templateColumns="repeat(4, 1fr)">
    {/* <form> */}
    <GridItem colspan={3}>
    <Select options={filteredRecipes} isMulti={props.isMulti}/> 
    </GridItem>
    <GridItem>
      <Input placeholder="Enter a plan name"/>
    </GridItem>
    <Flex justify="right" m={5}>
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
      </Flex>
      {/* </form> */}
  </Grid>

  </>

  
  )
}