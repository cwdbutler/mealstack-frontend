import {
  Grid,
  GridItem,
  Heading,
  Box,
  Flex,
  Spacer,
  Image,
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


const ingredientsList = ingredientsArray.map((ingredient) => 
  <Box>
    <Divider></Divider>
  <ListItem>{ingredient}</ListItem>
  </Box>
)


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
        <GridItem rowSpan={2} colSpan={4} bg="papayawhip">
          <Flex h="100%" p="5">

        <Stat>
        <Badge borderRadius="full" px="2" colorScheme="teal">
                    Calories
        </Badge>
        <StatLabel>Total Calories</StatLabel>
          <StatNumber>{mockObj.mealplan.calories}</StatNumber>
        </Stat>
        <Stat>
        <Badge borderRadius="full" px="2" colorScheme="yellow">
                    Fat
        </Badge>
        <StatLabel>Total Fat </StatLabel>
          <StatNumber>{mockObj.mealplan.fat}</StatNumber>
        </Stat>
        <Stat>
        <Badge borderRadius="full" px="2" color="#652B19" backgroundColor="#F6AD55">
                    Carbs
        </Badge>
        <StatLabel>Total Carbs</StatLabel>
          <StatNumber>{mockObj.mealplan.carbs}</StatNumber>
        </Stat>
        <Stat>
        <Badge borderRadius="full" px="2" color="#00000" backgroundColor="#C05621">
                    Protein
        </Badge>
        <StatLabel>Total Protein</StatLabel>
          <StatNumber>{mockObj.mealplan.protein}</StatNumber>
        </Stat>
        <Box>
        <PieChart
          data={[
            { title: 'Carbs', value: mockObj.mealplan.carbs, color: '#F6AD55' },
            { title: 'Fat', value: mockObj.mealplan.fat, color: '#FAF089' },
            { title: 'Protein', value: mockObj.mealplan.protein, color: '#C05621' },
          ]}
          />
        </Box>

          </Flex>
        </GridItem>
        <GridItem rowSpan={10} colSpan={2}>
          <Flex
            d="column"
            h="100%"
            p="5"
            overflow="scroll"
            border="2px"
            borderColor="gray.200"
            borderRadius="10"
          >
            <Heading>Shopping List</Heading>
            <UnorderedList mt="5">
              <Stack spacing={4}>
                <ListItem>{ingredientsList} </ListItem>
              </Stack>
            </UnorderedList>
          </Flex>
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} bg="papayawhip">
          Breakfast
          <Divider></Divider>{mockObj.recipes[1].label}
          <Divider></Divider>Calories: {mockObj.recipes[1].calories}
          <Divider></Divider>Fat: {mockObj.recipes[1].fat}
          <Divider></Divider>Carbs: {mockObj.recipes[1].carbs}
          <Divider></Divider>Protein: {mockObj.recipes[1].protein}
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} bg="papayawhip">
          Lunch
          <Divider></Divider>{mockObj.recipes[1].label}
          <Divider></Divider>Calories: {mockObj.recipes[1].calories}
          <Divider></Divider>Fat: {mockObj.recipes[1].fat}
          <Divider></Divider>Carbs: {mockObj.recipes[1].carbs}
          <Divider></Divider>Protein: {mockObj.recipes[1].protein}
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} bg="papayawhip">
          Dinner
          <Divider></Divider>{mockObj.recipes[2].label}
          <Divider></Divider>Calories: {mockObj.recipes[2].calories}
          <Divider></Divider>Fat: {mockObj.recipes[2].fat}
          <Divider></Divider>Carbs: {mockObj.recipes[2].carbs}
          <Divider></Divider>Protein: {mockObj.recipes[2].protein}
        </GridItem>
       
      </Grid>
    </>
  );
}
