import './Plan.css';

export default function Plan(props) {
  return (
    <div className="planContainer">
      <h1>{props.plan.plan_name}</h1>
      <div className="mealBox">
        <h1>{props.plan.breakfast_name}</h1>
        <img src={props.plan.img_url} alt="" />
      </div>
      <div className="mealBox">
      <h1>{props.plan.lunch_name}</h1>
        <img src={props.plan.img_url} alt="" />
      </div>
      <div className="mealBox">
      <h1>{props.plan.dinner_name}</h1>
        <img src={props.plan.img_url} alt="" />
      </div>
      <div className="macrosContainer">
        <span>Fats: <strong>{props.plan.fat}</strong></span>
        <span>Carbs: <strong>{props.plan.carbs}</strong></span>
        <span>Protein: <strong>{props.plan.protein}</strong></span>
        <span>Calories: <strong>{props.plan.calories}</strong></span>
      </div>
    </div>
  );
}
