import './Search.css';
import Plan from './Plan';
import usePlanList from "./hooks/usePlanList";

function Search() {
  const [plansList, recipeList] = usePlanList();


  const plans = plansList.map((data) => {
    let filteredBreakfast = recipeList.find(x => x.recipe_id == data.breakfast_id);
    let filteredLunch = recipeList.find(x => x.recipe_id == data.lunch_id);
    let filteredDinner = recipeList.find(x => x.recipe_id == data.dinner_id);
    let filteredSnack = recipeList.find(x => x.recipe_id == data.snack_id);

    const isMealsLoaded = () => {
      return (filteredBreakfast && filteredLunch && filteredDinner && filteredSnack) ? true : false
    }

    const key = `plan-${data.id}`;
    return isMealsLoaded() ? <Plan plan={data} key={key} breakfast={filteredBreakfast} lunch={filteredLunch} dinner={filteredDinner} snack={filteredSnack}/> : <></>
    
  })

    return (
      <div className="Search">
        {plans}
      </div>
    );
  
  
}

export default Search;
