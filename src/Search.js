import './Search.css';
import Plan from './Plan';

function Search() {
  const fakePlansArray = [{
    id: 500,
    plan_name: "Super Good Plan",
    breakfast_name: 'Eggs Benedict',
    lunch_name: 'Nicoise Salad',
    dinner_name: 'Spicy Chicken and Rice',
    calories: 100,
    fat: 50,
    protein: 20,
    carbs: 50,
    img_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'
  },
  {
    id: 501,
    plan_name: "Another Plan",
    breakfast_name: 'Pancakes',
    lunch_name: 'Tuna Sandwich',
    dinner_name: 'Lemon Pasta',
    calories: 450,
    fat: 432,
    protein: 56,
    carbs: 540,
    img_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'
  },
  {
    id: 505,
    plan_name: "Third Plan",
    breakfast_name: 'Full English',
    lunch_name: 'Tomato Soup',
    dinner_name: 'POt Roast',
    calories: 6553,
    fat: 78,
    protein: 50,
    carbs: 234,
    img_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'
  }]
  const plans = fakePlansArray.map((data) => {
    return <Plan plan={data} />
  })
  return (
    <div className="Search">
      {plans}
    </div>
  );
}

export default Search;
