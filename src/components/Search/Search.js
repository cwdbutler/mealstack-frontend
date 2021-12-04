import { useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchIndex from './SearchIndex';
import useSearch from '../../hooks/useSearch';

function Search() {
  let [searchParams] = useSearchParams();

  const [searchResults, getFilteredPlans] = useSearch(searchParams);

  return (
    <>
      <SearchBar params={searchParams} />
      <SearchIndex plans={searchResults} />
    </>
  );
}

export default Search;
