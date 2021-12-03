import {
  Checkbox,
  Grid,
  GridItem,
  Heading,
  Box,
  Flex,
  Spacer,
  Image,
  List,
  ListItem,
  UnorderedList,
  Stack,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
  Badge,
} from '@chakra-ui/react';
import { Center, Divider } from '@chakra-ui/layout';

import { PieChart } from 'react-minimal-pie-chart';


import mockObj from './mockMealPlan.js'

let ingredientsArray = []

let allIngredients = () => {
  mockObj.recipes.forEach( x => ingredientsArray.push(x.ingredients))
}

allIngredients()


let shoppingListArray = []

let shoppingListFormatter = () => {
  for (let i = 0; i < ingredientsArray.length; i++) {
    shoppingListArray.push((ingredientsArray[i].split(",")))
  }
}

shoppingListFormatter()

let shoppingListObjectArray = []

let shoppingListObjectCreator = () => {
  let flattenedList = shoppingListArray.flat()
  for (let i = 0; i < flattenedList.length; i++) {
    let tempArr = flattenedList[i].split("g ")
    let tempObj = {name: tempArr[1], weight: tempArr[0]}
    shoppingListObjectArray.push(tempObj)
  }
}

shoppingListObjectCreator()

console.log(shoppingListObjectArray)

const shoppingListDisplay = shoppingListObjectArray.map((item) => 
      <Box>
        <Checkbox colorScheme='teal' size='sm'>
          {Math.round(item.weight)} {Math.round(item.weight) == 1 ? "gram" : "grams"} of {item.name == "eg" ? "egg" : item.name}
        </Checkbox>
      </Box>
)

// const ingredientsList = ingredientsArray.map((ingredient) => 
//   <Box>
//     <Divider></Divider>
//   <ListItem>{ingredient}</ListItem>
//   </Box>
// )


export default function PlanInfo() {
  return (
    <>
      <Center>
        <Heading mt="4">Plan information</Heading>
      </Center>
      <Grid
        h="80vh"
        m="4"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={4} bg="teal.50" border="2px"
            borderColor="gray.200"
            borderRadius="10">
          <Center>
          <Heading size="md">Nutritional breakdown</Heading>
          </Center>

        <Flex h="100%" p="5">
            <Stat>
            <Badge borderRadius="full" px="2" colorScheme="teal">
                        Calories
            </Badge>
            <StatLabel>Total Calories</StatLabel>
              <StatNumber>{mockObj.mealplan.calories}</StatNumber>
            </Stat>
            <Stat>
            <Badge borderRadius="full" px="2" colorScheme="orange">
                        Fat
            </Badge>
            <StatLabel>Total Fat </StatLabel>
              <StatNumber>{mockObj.mealplan.fat}</StatNumber>
            </Stat>
            <Stat>
            <Badge borderRadius="full" px="2" colorScheme="pink">
                        Carbs
            </Badge>
            <StatLabel>Total Carbs</StatLabel>
              <StatNumber>{mockObj.mealplan.carbs}</StatNumber>
            </Stat>
            <Stat>
            <Badge borderRadius="full" px="2" colorScheme="red">
                        Protein
            </Badge>
            <StatLabel>Total Protein</StatLabel>
              <StatNumber>{mockObj.mealplan.protein}</StatNumber>
            </Stat>
            <Box>
            <Badge borderRadius="full" px="2" colorScheme="gray" variant="solid">
                        Macro Split
            </Badge>
            <PieChart
              data={[
                { title: 'Carbs', value: mockObj.mealplan.carbs, color: '#FED7E2' },
                { title: 'Fat', value: mockObj.mealplan.fat, color: '#FEEBC8' },
                { title: 'Protein', value: mockObj.mealplan.protein, color: '#FC8181' },
              ]} viewBoxSize={[100, 150]}
              />
            </Box>
            
          </Flex>
        </GridItem>
        <GridItem rowSpan={17} colSpan={2}>
          <Flex
            d="column"
            h="100%"
            p="5"
            overflow="scroll"
            border="2px"
            borderColor="gray.200"
            borderRadius="10"
            backgroundColor="teal.50"
          >
            <Heading>Shopping List</Heading>
            <List mt="5">
              <Stack spacing={4}>
                <ListItem>{shoppingListDisplay}</ListItem>
              </Stack>
            </List>
          </Flex>
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} bg="teal.50" border="2px"
            borderColor="gray.200"
            borderRadius="10">
          <Center><Heading size="sm">{mockObj.recipes[0].label} for breakfast</Heading> </Center>      
          <List>
          <ListItem>Calories: {mockObj.recipes[0].calories}</ListItem>
          <ListItem>Fat: {mockObj.recipes[0].fat}</ListItem>
          <ListItem>Carbs: {mockObj.recipes[0].carbs}</ListItem>
          <ListItem>Protein: {mockObj.recipes[0].protein}</ListItem>
          <ListItem>Ingredients: {mockObj.recipes[0].ingredients}</ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} bg="teal.50" border="2px"
            borderColor="gray.200"
            borderRadius="10">
          <Heading size="sm">{mockObj.recipes[1].label} for lunch</Heading>
          <List>
          <ListItem>Calories: {mockObj.recipes[1].calories}</ListItem>
          <ListItem>Fat: {mockObj.recipes[1].fat}</ListItem>
          <ListItem>Carbs: {mockObj.recipes[1].carbs}</ListItem>
          <ListItem>Protein: {mockObj.recipes[1].protein}</ListItem>
          <ListItem>Ingredients: {mockObj.recipes[1].ingredients}</ListItem>
          </List>
        </GridItem>
        <GridItem rowSpan={8} colSpan={4} bg="teal.50" border="2px"
            borderColor="gray.200"
            borderRadius="10" >
          <Heading size="sm">{mockObj.recipes[2].label} for dinner</Heading>          <List>
          <ListItem>Calories: {mockObj.recipes[2].calories}</ListItem>
          <ListItem>Fat: {mockObj.recipes[2].fat}</ListItem>
          <ListItem>Carbs: {mockObj.recipes[2].carbs}</ListItem>
          <ListItem>Protein: {mockObj.recipes[2].protein}</ListItem>
          <ListItem>Ingredients: {mockObj.recipes[2].ingredients}</ListItem>
          </List>
        </GridItem>
       
      </Grid>
    </>
  );
}
