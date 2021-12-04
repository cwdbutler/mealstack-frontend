import Plan from './Plan';

function SearchIndex({ plans }) {
  if (plans.error) {
    return <h1>ERRORRRRRR</h1>;
  }
  const planList = plans.map((data) => {
    return <Plan plan={data} key={data.id} />;
  });
  return (
    <div className="Search">
      {planList.length > 0 ? planList : <h1>No search results matched</h1>}
    </div>
  );
}

export default SearchIndex;
