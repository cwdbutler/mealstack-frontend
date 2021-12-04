import Plan from './Plan';

function SearchIndex(props) {
  const planList = props.plans.map((data) => {
    return <Plan plan={data} key={data.id} />;
  });
  return <div className="Search">{planList}</div>;
}

export default SearchIndex;
