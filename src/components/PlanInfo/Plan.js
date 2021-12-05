import {
  Checkbox,
  Grid,
  GridItem,
  Heading,
  Box,
  Flex,
  List,
  ListItem,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Badge,
  Text,
} from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import { PieChart } from 'react-minimal-pie-chart';

export default function Plan({ plan }) {
  console.log('plan inside Plan', plan);

  const data = [
    { title: 'Carbs', value: plan.carbs, color: '#FED7E2' },
    { title: 'Fat', value: plan.fat, color: '#FEEBC8' },
    { title: 'Protein', value: plan.protein, color: '#FC8181' },
  ];
  let ingredientsArray = [];

  let allIngredients = () => {
    plan.recipes.forEach(({ recipe }) =>
      ingredientsArray.push(recipe.ingredients)
    );
  };

  allIngredients();

  let shoppingListArray = [];

  let shoppingListFormatter = () => {
    for (let i = 0; i < ingredientsArray.length; i++) {
      shoppingListArray.push(ingredientsArray[i].split(','));
    }
  };

  shoppingListFormatter();

  let shoppingListObjectArray = [];

  let shoppingListObjectCreator = () => {
    let flattenedList = shoppingListArray.flat();
    for (let i = 0; i < flattenedList.length; i++) {
      let tempArr = flattenedList[i].split('g ');
      let tempObj = { name: tempArr[1], weight: tempArr[0] };
      shoppingListObjectArray.push(tempObj);
    }
  };

  shoppingListObjectCreator();

  console.log(shoppingListObjectArray);

  const shoppingListDisplay = shoppingListObjectArray.map((item) => (
    <Box>
      <Checkbox colorScheme="teal" size="sm">
        {Math.round(item.weight)}{' '}
        {Math.round(item.weight) === 1 ? 'gram' : 'grams'} of{' '}
        {item.name === 'eg' ? 'egg' : item.name}
      </Checkbox>
    </Box>
  ));

  return (
    <>
      <Center>
        <Heading mt="4">Plan information for {plan.name}</Heading>
      </Center>
      <Grid
        h="80vh"
        m="4"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={4}
          colSpan={4}
          bg="teal.50"
          border="2px"
          borderColor="gray.200"
          borderRadius="10"
        >
          <Center>
            <Heading size="md">Nutritional breakdown</Heading>
          </Center>

          <Flex h="100%" p="5">
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Calories
              </Badge>
              <StatLabel>Total Calories</StatLabel>
              <StatNumber>{plan.calories}</StatNumber>
            </Stat>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="orange">
                Fat
              </Badge>
              <StatLabel>Total Fat </StatLabel>
              <StatNumber>{plan.fat}</StatNumber>
            </Stat>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="pink">
                Carbs
              </Badge>
              <StatLabel>Total Carbs</StatLabel>
              <StatNumber>{plan.carbs}</StatNumber>
            </Stat>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="red">
                Protein
              </Badge>
              <StatLabel>Total Protein</StatLabel>
              <StatNumber>{plan.protein}</StatNumber>
            </Stat>
            <Box>
              <Badge
                borderRadius="full"
                px="2"
                colorScheme="gray"
                variant="solid"
              >
                Macro Split
              </Badge>
              <PieChart
                data={data}
                label={({ dataEntry }) =>
                  Math.round(dataEntry.percentage) + '%'
                }
                labelStyle={{
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
        {plan.recipes.map(({ recipe }, index) => {
          return (
            <GridItem
              rowSpan={4}
              colSpan={4}
              bg="teal.50"
              border="2px"
              borderColor="gray.200"
              borderRadius="10"
            >
              <Center>
                <Heading size="sm">
                  Meal {index + 1}: {recipe.label}
                </Heading>{' '}
              </Center>
              <List>
                <ListItem>
                  <Text fontSize="sm">Calories: {recipe.calories}</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">Fat: {recipe.fat}</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">Carbs: {recipe.carbs}</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">Protein: {recipe.protein}</Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Prep time: {recipe.totalTime} minutes
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontSize="sm">
                    Ingredients: {recipe.ingredients.split(',').join(', ')}
                  </Text>
                </ListItem>
              </List>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
