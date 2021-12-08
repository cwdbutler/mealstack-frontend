import {
  Image,
  Badge,
  Stat,
  StatNumber,
  Box,
  List,
  ListItem,
  Text,
  Spacer,
  Tag,
  Center,
  Button, 
  ButtonGroup,
  Stack
} from '@chakra-ui/react';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    isTagDisplayable(tag) ? <Tag key={`tag-${index}`} variant="solid" colorScheme="teal"> {tag} </Tag> : <> </>
  
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

    // // <GridItem  m={10} bg="white" border="2px" borderColor="gray.200" borderRadius="10" colSpan={2} rowSpan={2}>
    // //   <Grid autoColumns >
    // //     <GridItem m={15}>
    // //     <GridItem>
    //         {/* <Flex > */}
    //         <div>
    //             <Image boxSize='80px' borderRadius={15} src={props.recipe.image_url} alt="https://images.squarespace-cdn.com/content/v1/5c4238fb85ede19f16731a58/1630067985233-XPCZAEQGZN6639PBNKIW/image-asset.jpeg"></Image>
    //               <Spacer />
    //             <Text fontSize="lg">{props.recipe.label} </Text>
    //             {addedState === true ? <button onClick={()=>{removeFromSelected(selectedDisplayObject)}}> Remove </button> : <button onClick={()=>{addToSelected(selectedDisplayObject)}}> Add to mealplan </button>}
    //         </div>
    //         {/* </Flex> */}
    //     {/* // </GridItem> */}
    //     {/* // <GridItem> */}
    //       {/* // <Flex justify="center"> */}
    //     <div>
    //         {macroBadgeData.map(({header, colorScheme, value}) => (
    //           <Stat key={header} >
    //             <Badge borderRadius="full" px="2" colorScheme={colorScheme}>
    //               {header}
    //             </Badge>
    //             <StatNumber>{value}</StatNumber>
    //           </Stat>
        
    //         ))}
    //     </div>
    //       {/* </Flex>      */}
    //       <List>
    //       <ListItem>
    //         <Text fontSize="sm">
    //           Ingredients: {props.recipe.ingredients.split(',').join(', ')}
    //         </Text>   
    //       </ListItem>
    //     </List>
    //   {/* // </GridItem> */}
    //   {/* // <Flex grow={4}> */}
    //   <Tag variant="solid" colorScheme="teal"> {props.recipe.mealType} </Tag> 
    //   {props.recipe.totalTime !== 0 ? <Tag variant="solid" colorScheme="teal"> Prep time: {props.recipe.totalTime} minutes </Tag> : <> </>}
    //   // </Flex>
    //   {tagsDisplay}
    // //   </GridItem>
    // //   </Grid>
    // // </GridItem>

    

            <Box boxShadow="lg"
            p={5}
            borderRadius="lg"
            border="1px"
            borderColor="gray.100"
            mt={10}>
          

            <div style={{height: "500px", width: "500px", marginTop: 3, padding: 3}}>
              <div style={{height: "60%", display: "flex", alignItems: "flex-start"}}>
                <div style={{width: "60%"}}>
                <Center>
                  <Text fontSize="lg">{props.recipe.label}</Text>
                </Center>
                <Center>
                  <Image boxSize='240px' borderRadius={20} src={props.recipe.image_url} alt="https://images.squarespace-cdn.com/content/v1/5c4238fb85ede19f16731a58/1630067985233-XPCZAEQGZN6639PBNKIW/image-asset.jpeg"></Image>
                </Center>
                </div>
                <div style={{height: "267px", width: "40%", display: "flex", overflow: "hidden"}}>
                <Stack direction="column" spacing='6'>
                  <div>
                  {addedState === true ? <Button variant='outline' spacing='6'colorScheme="red" onClick={()=>{removeFromSelected(selectedDisplayObject)}}> Remove </Button> : <Button variant='outline' colorScheme="green" onClick={()=>{addToSelected(selectedDisplayObject)}}> Add to mealplan </Button>}
                  </div>
                  <div>
                    <a href={props.recipe.url} target="_blank" >
                        <Button variant='outline' size="md" colorScheme="blue" > More Info</Button>
                    </a>
                  </div>
                </Stack>
                </div>
              </div>


            <div style={{display: 'flex', justifyContent: "space-evenly"}}>
            {macroBadgeData.map(({header, colorScheme, value}) => (
              <Stat key={header} >
                <Badge borderRadius="full" px="2" colorScheme={colorScheme}>
                  {header}
                </Badge>
                <StatNumber>{value}</StatNumber>
              </Stat>
            ))}
            </div>

            <List>
                      <ListItem>
                        <Text fontSize="sm">
                          Ingredients: {props.recipe.ingredients.split(',').join(', ')}
                        </Text>   
                      </ListItem>
                    </List>

            <Tag variant="solid" colorScheme="teal"> {props.recipe.mealType} </Tag> 
            {props.recipe.totalTime !== 0 ? <Tag variant="solid" colorScheme="teal"> Prep time: {props.recipe.totalTime} minutes </Tag> : <> </>}


            {tagsDisplay}
            </div>
            </Box>

  
  )
}