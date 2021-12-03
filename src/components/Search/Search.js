import Plan from './Plan';
import usePlanList from '../../hooks/usePlanList';

function Search() {
  const [plansList] = usePlanList();


  const plans = plansList.map((data) => {


    const key = `plan-${data.id}`;
    return <Plan plan={data} key={key} />
    
  });
  return <div className="Search">{plans}</div>;
}

export default Search;
