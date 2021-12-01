import { Link } from 'react-router-dom';
import './Plan.css';

export default function Plan(props) {
  const plan = props.plan;
  const breakfastObject = props.breakfast;
  const lunchObject = props.lunch;
  const dinnerObject = props.dinner;
  const snackObject = props.snack;
  console.log(breakfastObject)

  return (
    <Link to="/plan">
    <div className="planContainer">
      <h1>{plan.name}</h1>
      <div className="mealBox">
        <h1>{breakfastObject.recipe_name}</h1>
        <img src={plan.img_url} alt="" />
      </div>
      <div className="mealBox">
      <h1>{lunchObject.recipe_name}</h1>
        <img src={plan.img_url} alt="" />
      </div>
      <div className="mealBox">
      <h1>{dinnerObject.recipe_name}</h1>
        <img src={plan.img_url} alt="" />
      </div>
      <div className="mealBox">
      <h1>{snackObject.recipe_name}</h1>
        <img src={plan.img_url} alt="" />
      </div>
      <div className="macrosContainer">
        <span>Fats: <strong>{plan.fat}</strong></span>
        <span>Carbs: <strong>{plan.carbs}</strong></span>
        <span>Protein: <strong>{plan.protein}</strong></span>
        <span>Calories: <strong>{plan.calories}</strong></span>
      </div>
      </div>
    </Link>
  );
}
