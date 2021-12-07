import {
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Flex,
  Input,
  Center,
} from '@chakra-ui/react';

// import usePlanCreator from '../../hooks/usePlanCreator';

export default function PlanCreator(props) {
  const { currentSelected, updateSelected } = props;

  // const planParams = null;

  // const parsePlanParams = () => {
  //   planParams = {
  //     label: planParams.label,
  //     first: planParams.first,
  //     second: planParams.second,
  //     third: planParams.third,
  //   };
  // };

  // const [createdPlan, loading] = usePlanCreator(planParams);

  const deselectRecipe = (clickedItem) => {
    updateSelected(
      currentSelected.filter(
        (selectedItem) => selectedItem.id !== clickedItem.id
      )
    );
  };

  return (
    <>
      <div>
        <Center mt={3}>Plan Name</Center>
        <Input mt={3} placeholder="Enter a plan name" />
      </div>
      <div>
        <div height="30%">
          <Center mt={3}>Recipes selected</Center>
        </div>
        <div height="70%">
          <div>
            {props.currentSelected.map((item) => (
              <Center key={item.label}>
                {item.label}
                <button onClick={() => deselectRecipe(item)}>X</button>
              </Center>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Flex justify="right" m={3}>
          <Flex m={2}>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Calories
              </Badge>
              <StatLabel>Total Calories</StatLabel>
              <StatNumber>0</StatNumber>
            </Stat>
          </Flex>
          <Flex m={2}>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="orange">
                Fat
              </Badge>
              <StatLabel>Total Fat </StatLabel>
              <StatNumber>0</StatNumber>
            </Stat>
          </Flex>
          <Flex m={2}>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="pink">
                Carbs
              </Badge>
              <StatLabel>Total Carbs</StatLabel>
              <StatNumber>0</StatNumber>
            </Stat>
          </Flex>
          <Flex m={2}>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="red">
                Protein
              </Badge>
              <StatLabel>Total Protein</StatLabel>
              <StatNumber>0</StatNumber>
            </Stat>
          </Flex>
        </Flex>
      </div>
      <div style={{ 'margin-top': '2em' }}>
        <button margin="3">Create Mealplan</button>
      </div>
    </>
  );
}
