import {
  Box,
  Image,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Divider
} from '@chakra-ui/react';

export default function Recipe(props){
  console.log(props.recipe)
  return (
    <Box>
    <>Name: {props.recipe.label} </> <Divider></Divider>
    <>Calories: {props.recipe.calories} </> <Divider></Divider>
    <>Fat: {props.recipe.fat} </> <Divider></Divider>
    <>Carbs: {props.recipe.carbs} </> <Divider></Divider>
    <>Protein: {props.recipe.protein} </> <Divider></Divider>
    <>Tags: {props.recipe.tags} </> <Divider></Divider>
    <>Meal Type: {props.recipe.mealType} </> <Divider></Divider>
    <>Ingredients: {props.recipe.ingredients} </> <Divider></Divider>
    <Divider></Divider>
    </Box>
  )
}