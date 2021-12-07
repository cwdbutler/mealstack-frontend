import usePlanInfo from '../../hooks/usePlanInfo';
import DetailedPlan from './DetailedPlan';
import NotFound from '../NotFound';
import { Center, Spinner, Heading } from '@chakra-ui/react';

export default function PlanInfo() {
  const [planInfo, loading] = usePlanInfo();

  if (loading) {
    return (
      <Center h="100%" mt={5}>
        <Spinner size="xl" thickness="2px" speed="0.65s" color="teal.200" />
      </Center>
    );
  }

  if (planInfo.error) {
    return (
      <Center h="100%">
        <Heading>{'Sorry, there seems to be a server error 🙁'}</Heading>
      </Center>
    );
  }
<<<<<<< HEAD
};

shoppingListObjectCreator();

const shoppingListDisplay = shoppingListObjectArray.map((item) => (
  <Box>
    <Checkbox colorScheme="teal" size="sm">
      {Math.round(item.weight)}{' '}
      {Math.round(item.weight) === 1 ? 'gram' : 'grams'} of{' '}
      {item.name === 'eg' ? 'egg' : item.name}
    </Checkbox>
  </Box>
));

const data = [
  { title: 'Carbs', value: mockObj.mealplan.carbs, color: '#FED7E2' },
  { title: 'Fat', value: mockObj.mealplan.fat, color: '#FEEBC8' },
  { title: 'Protein', value: mockObj.mealplan.protein, color: '#FC8181' },
];

export default function PlanInfo() {
  // const { id } = useParams();


  return (
    <>
      <Center>
        <Heading mt="4">Plan information</Heading>
      </Center>
      <Grid
        h="80vh"
        m="4"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={4}
          colSpan={4}
          bg="teal.50"
          border="2px"
          borderColor="gray.200"
          borderRadius="10"
        >
          <Center>
            <Heading size="md">Nutritional breakdown</Heading>
          </Center>
=======

  if (!planInfo) {
    return <NotFound />;
  }
>>>>>>> main

  return <DetailedPlan plan={planInfo} />;
}
