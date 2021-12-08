import {
  Image,
  Badge,
  Stat,
  StatNumber,
  Box,
  List,
  ListItem,
  Text,
  Tag,
  Center,
  Button, 
  StackDivider,
  VStack,
  Heading
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/toast';

import { useState } from 'react';
import { useEffect } from 'react';

export default function Recipe(props){

  const toast = useToast()


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
    isTagDisplayable(tag) ? <Tag mb={2} mr={2} mt={2} key={`tag-${index}`} variant="outline" colorScheme="teal"> {tag} </Tag> : <> </>
  
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
      toast({
        title: "Please select a max of three recipes",
        status: "error",
        isClosable: true,
      })
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
            <Box boxShadow="lg"
            p={5}
            borderRadius="lg"
            border="1px"
            borderColor="gray.100"
            mt={10}>
          

              <div style={{height: "500px", width: "500px", marginTop: 3, padding: 3}}>
                <div style={{height: "60%", display: "flex"}}>
                  <div style={{width: "60%"}}>
                  <Center>
                    <Heading as="h2" size="md">{props.recipe.label}</Heading>
                  </Center>
                  <Center mt={2}>
                    <Image boxSize='250px' borderRadius={20} src={props.recipe.image_url} alt="https://images.squarespace-cdn.com/content/v1/5c4238fb85ede19f16731a58/1630067985233-XPCZAEQGZN6639PBNKIW/image-asset.jpeg"></Image>
                  </Center>
                  </div>
                  <div style={{height: "267px", width: "40%", overflow: "hidden", justifyContent: "center", alignItems: "center"}}>
                  <VStack mt={12} spacing='10' divider={<StackDivider borderColor='gray.200' />} >
                    <div>
                      <a href={props.recipe.url} rel="noreferrer" target="_blank" >
                          <Button variant='outline' size="md" colorScheme="blue" > More Info</Button>
                      </a>
                    </div>
                    <div>
                    {addedState === true ? <Button variant='outline' colorScheme="red" onClick={()=>{removeFromSelected(selectedDisplayObject)}}> Remove </Button> : <Button variant='outline' colorScheme="green" onClick={()=>{addToSelected(selectedDisplayObject)}}> Add to mealplan </Button>}
                    </div>
                  </VStack>
                 </div>
               </div>


              <div style={{display: 'flex', justifyContent: "space-evenly"}}>
              {macroBadgeData.map(({header, colorScheme, value}) => (
                <Stat key={header} mt={2}>
                  <Badge borderRadius="full" px="2" colorScheme={colorScheme}>
                    {header}
                  </Badge>
                  <StatNumber>{value}</StatNumber>
                </Stat>
              ))}
              </div>
                <List mt={2}>
                  <ListItem>
                    <Text fontSize="xs">
                      <p style={{fontWeight: "600"}}>Ingredients: </p>{props.recipe.ingredients.split(',').join(', ')}
                    </Text>   
                  </ListItem>
                </List>
                <Tag mb={2} mr={2} mt={2} variant="outline" colorScheme="teal"> {props.recipe.mealType} </Tag> 
                {props.recipe.totalTime !== 0 ? <Tag m={2} variant="outline" colorScheme="teal"> Prep time: {props.recipe.totalTime} minutes </Tag> : <> </>}
                {tagsDisplay}
              </div>
            </Box>

  
  )
}