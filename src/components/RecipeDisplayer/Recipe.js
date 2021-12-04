import {
  Box,
  Image,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Divider, 
  Grid,
  GridItem,
  Flex,
  List,
  ListItem,
  Text,
  Center,
  Spacer,
  Tag
} from '@chakra-ui/react';

export default function Recipe(props){
  return (

    <GridItem m={10} bg="teal.50" border="2px" borderColor="gray.200" borderRadius="10" colSpan={2} rowSpan={2}>
      {/* <Flex width={160} height={350} m={5}> */}
      <Grid autoColumns >
        <GridItem m={15}>
        <GridItem>
            <Flex >
                <Image boxSize='100px' borderRadius={15} src={props.recipe.image_url} alt="https://images.squarespace-cdn.com/content/v1/5c4238fb85ede19f16731a58/1630067985233-XPCZAEQGZN6639PBNKIW/image-asset.jpeg"></Image>
                  <Spacer />
                <Text fontSize="lg">{props.recipe.label} </Text>
            </Flex>
        </GridItem>
        <GridItem>
          <Flex>
          <Stat>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Calories
            </Badge>
            <StatNumber>{props.recipe.calories}</StatNumber>
          </Stat>
          <Stat>
            <Badge borderRadius="full" px="2" colorScheme="orange">
              Fat
            </Badge>
            <StatNumber>{props.recipe.fat}</StatNumber>
          </Stat>
          <Stat>
            <Badge borderRadius="full" px="2" colorScheme="pink">
              Carbs
            </Badge>
            <StatNumber>{props.recipe.carbs}</StatNumber>
          </Stat>  
          <Stat>
            <Badge borderRadius="full" px="2" colorScheme="red">
              Protein
            </Badge>
            <StatNumber>{props.recipe.protein}</StatNumber>
          </Stat> 
          </Flex>     
          <List>
          <ListItem>
            <Text fontSize="sm">
              Ingredients: {props.recipe.ingredients.split(',').join(', ')}
            </Text>   
          </ListItem>
        </List>
      </GridItem>
      <Flex>
      <Tag variant="solid" colorScheme="orange"> {props.recipe.mealType} </Tag> 
      <Spacer />
      {props.recipe.totalTime != 0 ? <Tag variant="solid" colorScheme="orange"> Prep time: {props.recipe.totalTime} minutes </Tag> : <> </>}
      </Flex>
      <GridItem>Tags: {props.recipe.tags} </GridItem>
      </GridItem>
      </Grid>
      {/* </Flex> */}
    </GridItem>
    

    // <Box>
    
    // <>Name: {props.recipe.label} </> 
    // <>Calories: {props.recipe.calories} </> 
    // <>Fat: {props.recipe.fat} </> 
    // <>Carbs: {props.recipe.carbs} </> 
    // <>Protein: {props.recipe.protein} </> 
    // <>Tags: {props.recipe.tags} </> 
    // <>Meal Type: {props.recipe.mealType} </> 
    // <>Ingredients: {props.recipe.ingredients} </> 
    // 
    // </Box>
  )
}