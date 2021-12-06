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

const PlanInfo = ({}) => {
  const {planInfo} = usePlanInfo()
  
      const data = [
        { title: 'Carbs', value: planInfo.carbs, color: '#FED7E2' },
        { title: 'Fat', value: planInfo.fat, color: '#FEEBC8' },
        { title: 'Protein', value: planInfo.protein, color: '#FC8181' },
      ]

      const ingredientsArray = planInfo.recipes?.map( x => x.recipe.ingredients) ?? []
      const shoppingListArray =  ingredientsArray.reduce((acc, ingredientsItem) => [
          ...acc,
          ...ingredientsItem.split(","),
        ], [])

      let shoppingListObjectArray = []

      let shoppingListObjectCreator = () => {
        for (let i = 0; i < shoppingListArray.length; i++) {
          let tempArr = shoppingListArray[i].split("g ")
          let tempObj = {name: tempArr[1], weight: tempArr[0]}
          shoppingListObjectArray.push(tempObj)
        }
      }

      shoppingListObjectCreator()

      const shoppingListDisplay = shoppingListObjectArray.map((item) => 
            <Box key={item.name}>
              <Checkbox colorScheme='teal' size='sm'>
                {Math.round(item.weight)} {Math.round(item.weight) == 1 ? "gram" : "grams"} of {item.name == "eg" ? "egg" : item.name}
              </Checkbox>
            </Box>
      )

  const macroBadgeData = [
    {header: 'Calories', label: 'Total Calories', colorScheme: "teal", value: planInfo.calories},
    {header: 'Fat', label: 'Total Fat', colorScheme: "orange", value: planInfo.fat},
    {header: 'Carbs', label: 'Total Carbs', colorScheme: "pink", value: planInfo.carbs},
    {header: 'Protein', label: 'Total Protein', colorScheme: "red", value: planInfo.protein},
  ]

  if (!planInfo.recipes) return <div />

  return (
    <SubpageTemplate
      heading={
        <Center>
          <Heading mt="4">{planInfo.name}</Heading>
        </Center>
      }
      nutritionalInfo={
        <>
          <Center>
            <Heading size="md">Nutritional breakdown</Heading>
          </Center>
          <Flex h="100%" p="5">
            <MacroBadges macroBadgeData={macroBadgeData} />
            <Box>
            <Badge borderRadius="full" px="2" colorScheme="gray" variant="solid">Macro Split</Badge>
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
          </>
      }      
      recipeData={planInfo.recipes?.map((recipeData, idx)=> (            
            <Box bg="teal.50" border="2px" borderColor="gray.200" borderRadius="10" p="2" my="1">
              <NutritionalInfoCard key={recipeData.recipe.id} recipeData={recipeData} />
            </Box>
          ))}
      aside={
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
      }
    />
  )
}

const SubpageTemplate = ({heading, nutritionalInfo, recipeData, aside}) => (
    <div style={{
      width: '100%',
      height: '650px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{position: 'sticky' }}>{heading}</div>
      <div id="main content" style={{display: 'flex', marginBottom: 10, height: '100%'}}>
        <div id="left-side">
          <div style={{height: "30%"}}>{nutritionalInfo}</div>
          <div id="shopping list" style={{height: "70%" , width: 424}}>
            {aside}
          </div>
        </div>
        <div id="right-side" style={{overflowY: 'scroll', height: "100%"}}>{recipeData} </div>
      </div>
    </div>
)

const MacroBadges = ({macroBadgeData}) => (
  macroBadgeData.map(({header, colorScheme, value, label}) => (
    <Stat key={header}>
      <Box px="2">
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Badge p={1} borderRadius="full" colorScheme={colorScheme}>{header}</Badge>
          <StatLabel p={1} >{label}</StatLabel>
        </Flex >
      </Box>
      <StatNumber>{value}</StatNumber>
    </Stat>
  ))
)

const getTimeLabel = (minutes) => `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`

const NutritionalInfoCard = ( {recipeData}) => {
  const {recipe} = recipeData ?? {};

  const recipeNutritionalInfo = [
    {key: "Calories", value: recipe.calories },
    {key: "Carbs", value: recipe.carbs},
    {key: "Fat", value: recipe.fat},
    {key: "Protein", value: recipe.protein},
    {key: "Prep time", value: getTimeLabel(recipe.totalTime)},
    {key: "Ingredients", value: recipe.ingredients.split(",").join(", ")}
  ]



  const recipeNutritionalInfoDisplay = recipeNutritionalInfo.map(({key, value}) => (
      <ListItem key={key}>
          <Text fontSize="sm">
            {`${key}: ${value}`}
          </Text>
      </ListItem>
    ))

  return (
    <>
    <Center><Heading size="sm">{recipe.label}</Heading> </Center>      
      <List>
        {recipeNutritionalInfoDisplay}
      </List>
    </>
  )
}

export default PlanInfo
