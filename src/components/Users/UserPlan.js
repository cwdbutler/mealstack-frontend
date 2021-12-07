import { Link } from 'react-router-dom';
import {
  Box,
  Image,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Button,
} from '@chakra-ui/react';

export default function UserPlan(props) {
  let mockPlan = {
    id: 13,
    createdAt: '2021-12-04T19:09:27.635Z',
    updatedAt: '2021-12-04T19:09:27.637Z',
    calories: 1879,
    protein: 33,
    carbs: 371,
    fat: 27,
    name: 'Sushi sushi sushi',
    recipes: [
      {
        planId: 13,
        recipeId: 526,
        recipe: {
          id: 526,
          createdAt: '2021-12-02T16:36:34.458Z',
          updatedAt: '2021-12-02T16:36:34.459Z',
          label: 'Sushi Rice',
          image_url:
            'https://www.edamam.com/web-img/841/8411dc19577befc055d796a5c350002b.jpeg',
          url: 'https://www.foodnetwork.com/recipes/tyler-florence/sushi-rice-recipe-1937414',
          yield: 4,
          dairyFree: true,
          glutenFree: true,
          peanutFree: true,
          porkFree: true,
          kosher: true,
          vegan: true,
          vegetarian: true,
          tags: 'Vegan,Vegetarian,Dairy-Free,Gluten-Free,Peanut-Free,Pork-Free,Kosher,japanese,lunch/dinner,main course',
          ingredients: '147g rice,15g rice wine vinegar,13g sugar,2g salt',
          totalTime: 0,
          cuisineType: 'japanese',
          mealType: 'lunch/dinner',
          dishType: 'main course',
          calories: 578,
          fat: 1,
          carbs: 129,
          protein: 10,
        },
      },
      {
        planId: 13,
        recipeId: 529,
        recipe: {
          id: 529,
          createdAt: '2021-12-02T16:36:34.458Z',
          updatedAt: '2021-12-02T16:36:34.459Z',
          label: 'Basic Sushi Rice',
          image_url:
            'https://www.edamam.com/web-img/f66/f66ac65130ac985fad8db90b1cbc261c.jpg',
          url: 'http://www.foodrepublic.com/2011/10/28/basic-sushi-rice-recipe',
          yield: 4,
          dairyFree: true,
          glutenFree: true,
          peanutFree: true,
          porkFree: true,
          kosher: true,
          vegan: true,
          vegetarian: true,
          tags: 'Vegan,Vegetarian,Dairy-Free,Gluten-Free,Peanut-Free,Pork-Free,Kosher,japanese,lunch/dinner,main course',
          ingredients: '147g rice,20g rice vinegar,10g sugar,2g salt',
          totalTime: 0,
          cuisineType: 'japanese',
          mealType: 'lunch/dinner',
          dishType: 'main course',
          calories: 566,
          fat: 1,
          carbs: 125,
          protein: 10,
        },
      },
      {
        planId: 13,
        recipeId: 305,
        recipe: {
          id: 305,
          createdAt: '2021-12-02T16:26:47.131Z',
          updatedAt: '2021-12-02T16:26:47.132Z',
          label: 'Sushi Rice Salad',
          image_url:
            'https://www.edamam.com/web-img/17e/17ec8f27c19516fb56a55ac4522964a6.jpg',
          url: 'https://food52.com/recipes/35595-sushi-rice-salad',
          yield: 4,
          dairyFree: true,
          glutenFree: false,
          peanutFree: true,
          porkFree: true,
          kosher: true,
          vegan: true,
          vegetarian: true,
          tags: 'Vegan,Vegetarian,Dairy-Free,Peanut-Free,Pork-Free,Kosher,japanese,lunch/dinner,salad,main course',
          ingredients:
            '11g canola oil,6g soy sauce,4g rice wine vinegar,3g sesame seeds,2g sugar,1g ginger,1g wasabi,143g brown rice,26g cucumber,63g avocado,2g nori,1g scallion',
          totalTime: 0,
          cuisineType: 'japanese',
          mealType: 'lunch/dinner',
          dishType: 'salad',
          calories: 735,
          fat: 25,
          carbs: 117,
          protein: 13,
        },
      },
    ],
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
      <Link to={`/plan/${mockPlan.id}`}>
        <Image src={mockPlan.recipes[0].recipe.image_url} alt="Plan preview" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Calories
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {mockPlan.calories}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {mockPlan.name}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            <Stat>
              <StatLabel>Protein</StatLabel>
              <StatNumber>{mockPlan.protein}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Fat</StatLabel>
              <StatNumber>{mockPlan.fat}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Carbs</StatLabel>
              <StatNumber>{mockPlan.carbs}</StatNumber>
            </Stat>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
