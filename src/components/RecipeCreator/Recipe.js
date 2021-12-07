import {
  Image,
  Badge,
  Stat,
  StatNumber,
  Grid,
  GridItem,
  Flex,
  List,
  ListItem,
  Text,
  Spacer,
  Tag
} from '@chakra-ui/react';

import { useState } from 'react';
import { useEffect } from 'react';

export default function Recipe(props){
  let tagsArray = []
  let tagParser = () => {
    tagsArray = props.recipe.tags.split(",")
  }

  tagParser()


  let tagsToDisplay = [ "Vegetarian", "Dairy-Free", "Pork-Free", "Kosher", "Peanut-Free"]

  let isTagDisplayable = (tag) => {
    if (tagsToDisplay.includes(tag)){
      return true 
    } else {
      return false
    }
    
  }
  
  const tagsDisplay = tagsArray.map((tag, index) => 
    isTagDisplayable(tag) ? <Tag key={`tag-${index}`} variant="solid" colorScheme="orange"> {tag} </Tag> : <> </>
  
  )


  const macroBadgeData = [
    {header: 'Calories', colorScheme: "teal", value: props.recipe.calories},
    {header: 'Fat', colorScheme: "orange", value: props.recipe.fat},
    {header: 'Carbs', colorScheme: "pink", value: props.recipe.carbs},
    {header: 'Protein', colorScheme: "red", value: props.recipe.protein},
  ]

  const { currentSelected, updateSelected } = props 

  const selectedDisplayObject = { 
    id: props.recipe.id, 
    label: props.recipe.label, 
    image_url: props.recipe.image_url, 
    calories: props.recipe.calories,
    fat: props.recipe.fat,
    carbs: props.recipe.carbs,
    protein: props.recipe.protein
  }

  const [addedState, setAddedState] = useState(false)

  

  const checkAddedState = () => {
        if(currentSelected.some(item => item.id === selectedDisplayObject.id)) {
          setAddedState(true)
        } else {
          setAddedState(false)
        }
      }
  
  useEffect(() => {
    checkAddedState()
  })
  


  const exceededMaxRecipes = () => {
    return currentSelected.length >= 3 ? true : false 
  }


  const addToSelected = () => {
    if (addedState || exceededMaxRecipes()) {
      console.log("I'm already added, or you've reached your max")
    } else {
      updateSelected(currentSelected => [...currentSelected, selectedDisplayObject])
      setAddedState(true)
    }
  }

  const removeFromSelected = () => {
    if (addedState) {
      updateSelected(currentSelected.filter(item => item.id !== selectedDisplayObject.id));
      setAddedState(false)
    } else if (addedState === false ) {
      console.log("We can't remove something that doesnt exist")
    }
  }


  return (

    <GridItem  m={10} bg="teal.50" border="2px" borderColor="gray.200" borderRadius="10" colSpan={2} rowSpan={2}>
      <Grid autoColumns >
        <GridItem m={15}>
        <GridItem>
            <Flex >
                <Image boxSize='100px' borderRadius={15} src={props.recipe.image_url} alt="https://images.squarespace-cdn.com/content/v1/5c4238fb85ede19f16731a58/1630067985233-XPCZAEQGZN6639PBNKIW/image-asset.jpeg"></Image>
                  <Spacer />
                <Text fontSize="lg">{props.recipe.label} </Text>
                {addedState === true ? <button onClick={()=>{removeFromSelected(selectedDisplayObject)}}> Remove </button> : <button onClick={()=>{addToSelected(selectedDisplayObject)}}> Add to mealplan </button>}
            </Flex>
        </GridItem>
        <GridItem>
          <Flex justify="center">
            {macroBadgeData.map(({header, colorScheme, value}) => (
              <Stat key={header} >
                <Badge borderRadius="full" px="2" colorScheme={colorScheme}>
                  {header}
                </Badge>
                <StatNumber>{value}</StatNumber>
              </Stat>
            ))}
          </Flex>     
          <List>
          <ListItem>
            <Text fontSize="sm">
              Ingredients: {props.recipe.ingredients.split(',').join(', ')}
            </Text>   
          </ListItem>
        </List>
      </GridItem>
      <Flex grow={4}>
      <Tag variant="solid" colorScheme="orange"> {props.recipe.mealType} </Tag> 
      {props.recipe.totalTime !== 0 ? <Tag variant="solid" colorScheme="orange"> Prep time: {props.recipe.totalTime} minutes </Tag> : <> </>}
      </Flex>
      {tagsDisplay}
      </GridItem>
      </Grid>
    </GridItem>
  
  )
}