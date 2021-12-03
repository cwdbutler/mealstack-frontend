import usePlanInfo from '../../hooks/usePlanInfo'
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
  Text
} from '@chakra-ui/react';

import { Center, Divider } from '@chakra-ui/layout';

import { PieChart } from 'react-minimal-pie-chart';


import mockObj from './mockMealPlan.js'
import { useParams } from 'react-router';

export default function PlanInfo() {

  const [planInfo] = usePlanInfo()
  console.log(planInfo)
  

if(planInfo.recipes){

      const data = [
        { title: 'Carbs', value: planInfo.carbs, color: '#FED7E2' },
        { title: 'Fat', value: planInfo.fat, color: '#FEEBC8' },
        { title: 'Protein', value: planInfo.protein, color: '#FC8181' },
      ]


      let ingredientsArray = []
      
        let allIngredients = () => {
          planInfo.recipes.forEach( x => ingredientsArray.push(x.recipe.ingredients))
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

      const shoppingListDisplay = shoppingListObjectArray.map((item) => 
            <Box>
              <Checkbox colorScheme='teal' size='sm'>
                {Math.round(item.weight)} {Math.round(item.weight) == 1 ? "gram" : "grams"} of {item.name == "eg" ? "egg" : item.name}
              </Checkbox>
            </Box>
      )

      return (
        <>
          <Center>
            <Heading mt="4">{planInfo.name}</Heading>
          </Center>
          <Grid
            h="80vh"
            m="4"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={4} colSpan={4} bg="teal.50" border="2px"
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
                  <StatNumber>{planInfo.calories}</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="orange">
                            Fat
                </Badge>
                <StatLabel>Total Fat </StatLabel>
                  <StatNumber>{planInfo.fat}</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="pink">
                            Carbs
                </Badge>
                <StatLabel>Total Carbs</StatLabel>
                  <StatNumber>{planInfo.carbs}</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="red">
                            Protein
                </Badge>
                <StatLabel>Total Protein</StatLabel>
                  <StatNumber>{planInfo.protein}</StatNumber>
                </Stat>
                <Box>
                <Badge borderRadius="full" px="2" colorScheme="gray" variant="solid">
                            Macro Split
                </Badge>
                <PieChart
                  data={data}
                  label={({dataEntry})=> Math.round(dataEntry.percentage) + "%"}
                  labelStyle= {{
                    fontSize: '15px',
                  }}
                  viewBoxSize={[100, 150]} 
                  />
                </Box>
                
              </Flex>
            </GridItem>
            <GridItem rowSpan={20} colSpan={2}>
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
            <GridItem rowSpan={4} colSpan={4} bg="teal.50" border="2px"
                borderColor="gray.200"
                borderRadius="10">
              <Center><Heading size="sm"> {planInfo.recipes[0].recipe.label}</Heading> </Center>      
              <List>
                <ListItem>
                  <Text fontSize="sm">Calories: {planInfo.recipes[0].recipe.calories}</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Fat: {planInfo.recipes[0].recipe.fat}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Carbs: {planInfo.recipes[0].recipe.carbs}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Protein: {planInfo.recipes[0].recipe.protein}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Prep time: {planInfo.recipes[0].recipe.totalTime} minutes
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Ingredients: {planInfo.recipes[0].recipe.ingredients.split(",").join(", ")}
                  </Text>
                </ListItem>
              </List>
            </GridItem>
            <GridItem rowSpan={8} colSpan={4} bg="teal.50" border="2px"
                borderColor="gray.200"
                borderRadius="10">
              <Center><Heading size="sm">{planInfo.recipes[1].recipe.label}</Heading> </Center>      
              <List>
                <ListItem>
                  <Text fontSize="sm">Calories: {planInfo.recipes[1].recipe.calories}</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Fat: {planInfo.recipes[1].recipe.fat}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Carbs: {planInfo.recipes[1].recipe.carbs}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Protein: {planInfo.recipes[1].recipe.protein}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Prep time: {planInfo.recipes[1].recipe.totalTime} minutes
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Ingredients: {planInfo.recipes[1].recipe.ingredients.split(",").join(", ")}
                  </Text>
                </ListItem>
              </List>
            </GridItem>
            <GridItem rowSpan={4} colSpan={4} bg="teal.50" border="2px"
                borderColor="gray.200"
                borderRadius="10">
              <Center><Heading size="sm">{planInfo.recipes[2].recipe.label}</Heading> </Center>      
              <List>
                <ListItem>
                  <Text fontSize="sm">Calories: {planInfo.recipes[2].recipe.calories}</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Fat: {planInfo.recipes[2].recipe.fat}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Carbs: {planInfo.recipes[2].recipe.carbs}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Protein: {planInfo.recipes[2].recipe.protein}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Prep time: {planInfo.recipes[2].recipe.totalTime} minutes
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Ingredients: {planInfo.recipes[2].recipe.ingredients.split(",").join(", ")}
                  </Text>
                </ListItem>
              </List>
            </GridItem>     
          </Grid>
        </>
      );
    } else {
      return ( <> </>)
    }
}
