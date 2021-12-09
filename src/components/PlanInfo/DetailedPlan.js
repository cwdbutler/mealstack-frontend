import {
  Checkbox,
  Heading,
  Box,
  Flex,
  List,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  Badge,
  Text,
  Modal, 
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Stack,
  StackDivider
} from '@chakra-ui/react';
import { Center, VStack } from '@chakra-ui/layout';
import { PieChart } from 'react-minimal-pie-chart';
import { useDisclosure} from '@chakra-ui/hooks';
import React from 'react'
import SavePlanButton from '../SavePlanButton';


export default function DetailedPlan ({plan}) {
  
      const data = [
        { title: 'Carbs', value: plan.carbs, color: '#FED7E2' },
        { title: 'Fat', value: plan.fat, color: '#FEEBC8' },
        { title: 'Protein', value: plan.protein, color: '#FC8181' },
      ]

      const ingredientsArray = plan.recipes?.map( x => x.recipe.ingredients) ?? []
      const shoppingListArray =  ingredientsArray.reduce((acc, ingredientsItem) => [
          ...acc,
          ...ingredientsItem.split(","),
        ], [])

      let shoppingListObjectArray = []

      // let shoppingListObjectCreator = () => {
      //   for (let i = 0; i < shoppingListArray.length; i++) {
      //     let tempArr = shoppingListArray[i].split("g ")
      //     let tempObj = {name: tempArr[1], weight: tempArr[0]}
      //     shoppingListObjectArray.push(tempObj)
      //   }
      // }

      let shoppingListObjectCreator = () => {
        for (let i = 0; i < shoppingListArray.length; i++) {
          let tempArr = shoppingListArray[i].split("g ")
          let tempObj = {name: tempArr[1], weight: tempArr[0]}
          shoppingListObjectArray.push(tempObj)
        }
        shoppingListObjectArray = Object.values(shoppingListObjectArray.reduce((c, { name, weight }) => {
          c[name] = c[name] || {name,weight: 0};
          c[name].weight = (parseInt(c[name].weight) + parseInt(weight)).toString();
          return c;
        }, {}));
      }

      shoppingListObjectCreator()

      const shoppingListDisplay = shoppingListObjectArray.map((item, index) => 
            <Box key={`${item.name}-${index}`}>
              <Checkbox colorScheme='teal' size='sm'>
                {Math.round(item.weight)} {Math.round(item.weight) === 1 ? "gram" : "grams"} of {item.name === "eg" ? "egg" : item.name}
              </Checkbox>
            </Box>
      )

  const macroBadgeData = [
    {header: 'Calories', label: 'Total Calories', colorScheme: "teal", value: plan.calories},
    {header: 'Fat', label: 'Total Fat', colorScheme: "orange", value: plan.fat},
    {header: 'Carbs', label: 'Total Carbs', colorScheme: "pink", value: plan.carbs},
    {header: 'Protein', label: 'Total Protein', colorScheme: "red", value: plan.protein},
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = React.useRef()

  if (!plan.recipes) return <div />


  return (
    <SubpageTemplate
      heading={
        <Center>
          <Heading m="4">{plan.name}</Heading>
          <SavePlanButton id={plan.id} name={plan.name} />
        </Center>
      }
      nutritionalInfo={
        <>
          <Center>
            <Heading size="md">Nutritional breakdown</Heading>
          </Center>
          <Flex h="40%" p="5">
            <MacroBadges macroBadgeData={macroBadgeData} />
          </Flex>
          </>
      }
      pieChart={
        <VStack>
        <div style={{height: "30%"}}>
        <Center mb={2}>
            <Badge borderRadius="full" px="3" colorScheme="gray" variant="solid">Macro Split</Badge>
        </Center>
        </div>
        <div style={{height: "30%", overflow: "hidden"}}>
        <PieChart
          data={data}
          label={({dataEntry})=> Math.round(dataEntry.percentage) + "%"}
          labelStyle= {{
            fontSize: '8px',
          }}
        />
        </div>
        </VStack>
      }      
      recipeData={ 
        plan.recipes?.map((recipeData, idx)=> (
            <> 
            <Box key={idx} boxShadow="lg"
            p={5}
            borderRadius="xl"
            border="1px"
            borderColor="gray.100"
            m={1}>
              <Stack direction="row" divider={<StackDivider borderColor='gray.200' />} >
                <div id="Recipe-data" style={{width: '80%'}}>
                  <NutritionalInfoCard key={recipeData.recipe.id} recipeData={recipeData} />
                </div>
                <div id="Recipe-link" style={{width: '20%'}} >
                <a href={recipeData.recipe.url} rel="noreferrer" target="_blank" >
                  <Button variant='outline' size="md" colorScheme="blue" m={12} >More Info</Button>
                </a>
                </div>
              </Stack>
            </Box>
            </>
          ))
        
        }
      aside={
        <>
      <Center>
        <Button colorScheme="teal" variant="outline" mt={3} ref={btnRef} onClick={onOpen}>
          View shopping list
        </Button>
      </Center>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'outside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopping list</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {shoppingListDisplay}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
      }
    />
  );
}

const SubpageTemplate = ({heading, nutritionalInfo, recipeData, aside, pieChart}) => (
    <div style={{

      width: '100%',
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{position: 'sticky' }}>{heading}</div>
      <div id="main content" style={{display: 'flex', marginBottom: 10, height: '100%'}}>
        <div id="left-side">
          <div style={{height: "15%"}}> {aside}</div>
          <div style={{height: "35%"}}>{nutritionalInfo}</div>
          <div style={{height: "50%"}}>{pieChart}</div>
        </div>
        <div id="right-side" style={{ height: "auto"}}>{recipeData} </div>

      </div>
    </div>
);

const MacroBadges = ({macroBadgeData}) => (
  macroBadgeData.map(({header, colorScheme, value, label}) => (
    <Flex m={2}>
      <Stat>
        <Badge borderRadius="full" px="2" colorScheme={colorScheme}>
                    {header}
        </Badge>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Flex>
  ))
)


const getTimeLabel = (minutes) =>
  `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;

const NutritionalInfoCard = ({ recipeData }) => {
  const { recipe } = recipeData ?? {};

  const recipeNutritionalInfo = [
    {key: "Calories", value: recipe.calories },
    {key: "Carbs", value: recipe.carbs},
    {key: "Fat", value: recipe.fat},
    {key: "Protein", value: recipe.protein},
    {key: "Prep time", value: getTimeLabel(recipe.totalTime)},
    {key: "Ingredients", value: recipe.ingredients.split(",").join(", ")}
  ]



  const recipeNutritionalInfoDisplay = recipeNutritionalInfo.map(({key, value}) => (
      <Box mr={4}>
        <ListItem key={key}>
            <Text fontSize="sm">
              {`${key}: ${value}`}
            </Text>
        </ListItem>
      </Box>
    ))

  return (
    <>
    <Center><Heading size="sm">{recipe.label}</Heading> </Center> 
      <List>
        {recipeNutritionalInfoDisplay}
      </List>

    </>
  );
};
