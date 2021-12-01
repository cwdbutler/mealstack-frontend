import { Link } from 'react-router-dom';
import './Plan.css';

export default function Plan(props) {
  const plan = props.plan;
  return (
    <Link to="/plan">  
    <div className="planContainer">
      <h1>{plan.name}</h1>
      <div className="mealBox">
        <h1>{plan.breakfast_id}</h1>
        <img src={plan.img_url} alt="" />
      </div>
      <div className="mealBox">
      <h1>{plan.lunch_id}</h1>
        <img src={plan.img_url} alt="" />
      </div>
      <div className="mealBox">
      <h1>{plan.dinner_id}</h1>
        <img src={plan.img_url} alt="" />
      </div>
      <div className="mealBox">
      <h1>{plan.snack_id}</h1>
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
