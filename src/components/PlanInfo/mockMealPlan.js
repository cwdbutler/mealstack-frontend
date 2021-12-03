

let mockObj = { 
  mealplan: {
    id: 3,
    createdAt: "2021-12-01T12:17:06.462Z",
    updatedAt: "2021-12-01T12:17:06.463Z",
    calories: 2300,
    protein: 66,
    carbs: 119,
    fat: 99,
    breakfast_id: 1,
    lunch_id: 2,
    dinner_id: 3,
    'name' : "Mealplan2"
  }, 

  recipes: [ {
  id: 1, 
  "label": "Apple Ice recipes",
  "image": "https://www.edamam.com/web-img/dbd/dbd4bd58ebc7f049e17a320e18f72415",
  "url": "http://www.chowhound.com/recipes/apple-ice-10561",
  "yield": 8,
  "dairyFree": true,
  "glutenFree": true,
  "peanutFree": true,
  "porkFree": true,
  "kosher": true,
  "vegan": true,
  "vegetarian": true,
  "tags": "Vegan,Vegetarian,Dairy-Free,Gluten-Free,Peanut-Free,Pork-Free,Kosher,central europe,lunch/dinner,desserts",
  "ingredients": "130.94g Granny Smith apples,29.62g Simple Syrup,7.62g lemon juice",
  "totalTime": 375,
  "cuisineType": "central europe",
  "mealType": "lunch/dinner",
  "dishType": "desserts",
  "calories": 157,
  "fat": 0,
  "carbs": 40,
  "protein": 1
  }, 

  {
    id: 2,
    "label": "Toffee apple cookies",
    "image": "https://www.edamam.com/web-img/127/127229d2ff24e2e18d7d9b9c2d8e24e5.jpg" ,
    "url": "https://www.bbcgoodfood.com/recipes/toffee-apple-cookies",
    "yield": 24,
    "dairyFree": false,
    "glutenFree": false,
    "peanutFree": true,
    "porkFree": true,
    "kosher": true,
    "vegan": false,
    "vegetarian": true,
    "tags": "Vegetarian,Peanut-Free,Pork-Free,Kosher,british,teatime,biscuits and cookies" ,
    "ingredients": "7.29g unsalted butter,5.83g caster sugar,1.12g egg yolks,2.08g almond,3.54g toffees,3.54g dried apple,9.37g flour,1.25g milk" ,
    "totalTime" : 27,
    "cuisineType" : 'british',
    mealType: 'teatime',
    dishType: 'biscuits and cookies',
    calories: 154,
    fat: 9,
    carbs: 18,
    protein: 2
  }, 

  {
    id: 3,
    label: 'Apple-Orange Salad',
    image: 'https://www.edamam.com/web-img/18c/18cc39ef25d2c7d42fb1b0ef87370e7b.jpeg',
    url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/apple-orange-salad-recipe-1973808',
    yield: 6,
    dairyFree: true,
    glutenFree: true,
    peanutFree: true,
    porkFree: true,
    kosher: true,
    vegan: false,
    vegetarian: true,
    tags: 'Vegetarian,Dairy-Free,Gluten-Free,Peanut-Free,Pork-Free,Kosher,central europe,lunch/dinner,salad',
    ingredients: '93.33g navel oranges,87.33g blood oranges,10.5g honey,10g piece ginger,29.1g green apple,30.33g apple',
    totalTime: 25,
    cuisineType: 'central europe',
    mealType: 'lunch/dinner',
    dishType: 'salad',
    calories: 159,
    fat: 0,
    carbs: 41,
    protein: 2
  } ]
}
  
export default mockObj