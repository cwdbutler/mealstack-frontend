import Plan from './Plan';
import usePlanList from '../../hooks/usePlanList';
import { useSearchParams } from 'react-router-dom';

function Search() {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get('calories'));
  console.log(searchParams.get('fat'));
  console.log(searchParams.get('carbs'));
  console.log(searchParams.get('protein'));

  const [plansList] = usePlanList();

  const plans = plansList.map((data) => {
    const key = `plan-${data.id}`;
    return <Plan plan={data} key={key} />;
  });
  return <div className="Search">{plans}</div>;
}

export default Search;
