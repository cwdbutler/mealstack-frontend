import './Search.css';
import Plan from './Plan';
import usePlanList from "./hooks/usePlanList";

function Search() {
  const [plansList, recipeList] = usePlanList();

  let filteredBreakfast = null

  const plans = plansList.map((data) => {
    filteredBreakfast = recipeList.filter(x => x.recipe_id == data.breakfast_id)
    const key = `plan-${data.id}`;
      return ( <Plan plan={data} key={key} breakfast={filteredBreakfast}/>
    )
    
  })

    return (
      <div className="Search">
        {plans}
      </div>
    );
  
  
}

export default Search;
