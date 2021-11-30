import './Search.css';

function Search() {

  return (
    <div className="Search">
      <div className="planContainer">
        <div className="mealBox">
          <h1>Meal 1</h1>
        </div>
        <div className="mealBox">
        <h1>Meal 2</h1>
        </div>
        <div className="mealBox">
        <h1>Meal 3</h1>
        </div>
        <div className="macrosContainer">
          <h1>Plan Macros:</h1>
          <h3>Fats:</h3>
          <h3>Carbs:</h3>
          <h3>Protein:</h3>
          <h3>Calories:</h3>
        </div>
      </div>
    </div>
  );
}

export default Search;
