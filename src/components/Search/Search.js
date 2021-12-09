import { useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchIndex from './SearchIndex';
import useSearch from '../../hooks/useSearch';
import { Center, Spinner, Flex } from '@chakra-ui/react';

function Search() {
  let [searchParams] = useSearchParams();

  const [searchResults, loading] = useSearch(searchParams);

  return (
    <>
      <SearchBar params={searchParams} />
      {loading ? (
        <Center mt={5}>
          <Spinner size="xl" thickness="2px" speed="0.65s" color="teal.200" />
        </Center>
      ) : (
        <Flex justify="space-around">
          <SearchIndex plans={searchResults} />
        </Flex>
      )}
    </>
  );
}

export default Search;
