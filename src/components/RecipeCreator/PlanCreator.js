import {
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Flex,
  Center,
  Input,
  Heading,
  Tag,
  TagLabel,
  TagCloseButton,
  Avatar,
  Button,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/toast';

import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function PlanCreator(props) {
  const toast = useToast();

  let navigate = useNavigate();

  const { currentSelected, updateSelected } = props;

  const [planLabel, setPlanLabel] = useState(null);

  const getStats = (input) => {
    if (currentSelected.length === 0) {
      return 0;
    } else if (currentSelected.length === 1) {
      return currentSelected[0][input];
    } else if (currentSelected.length === 2) {
      return currentSelected[0][input] + currentSelected[1][input];
    } else if (currentSelected.length === 3) {
      return (
        currentSelected[0][input] +
        currentSelected[1][input] +
        currentSelected[2][input]
      );
    }
  };

  let planParams = null;

  const parsePlanParams = async () => {
    if (currentSelected[2]) {
      planParams = {
        label: planLabel,
        first: currentSelected[0].id.toString(),
        second: currentSelected[1].id.toString(),
        third: currentSelected[2].id.toString(),
      };
    }
  };

  const deselectRecipe = (clickedItem) => {
    updateSelected(
      currentSelected.filter(
        (selectedItem) => selectedItem.id !== clickedItem.id
      )
    );
  };

  const getCreatedPlan = async (planParams) => {
    const url = 'https://mealstack-backend.herokuapp.com/plans/new';

    const res = await fetch(url, {
      method: 'POST',
      body: new URLSearchParams({
        label: planParams.label,
        first: planParams.first,
        second: planParams.second,
        third: planParams.third,
      }),
    });
    const json = await res.json();
    return json;
  };


  console.log(planLabel)


  const sendParams = async () => {



    if((planLabel === null) || (planLabel === "")){
      toast({
        title: 'Please enter a plan name',
        status: 'error',
        isClosable: true,
      });
    }

    if (currentSelected.length < 3) {
      toast({
        title: 'Please add three recipes',
        status: 'error',
        isClosable: true,
      });
    }


    if ((planLabel !== null) && (planLabel !== "") && (currentSelected.length > 2)) {
      let newPlan = await getCreatedPlan(planParams)
      // Flash s
      navigate(`/plan/${newPlan.id}`);
    } else {
      console.log('You need full params');
    }
  };

  return (
    <>
      <div>
        <Center mt={3}>
          <Heading as="h2" size="md">
            Plan name
          </Heading>
        </Center>

        <Input
          variant="outline"
          mt={3}
          backgroundColor="gray.50"
          color="black.500"
          errorBorderColor="green.200"
          focusBorderColor="teal.600"
          borderRadius={5}
          border={5}
          onChange={(e) => {
            setPlanLabel(e.target.value);
          }}
          placeholder="Enter your plan name"
          isInvalid
        />
      </div>
      <div>
        <div height="30%">
          <Center mt={3}>
            <Heading as="h2" size="md">
              Recipes selected
            </Heading>
          </Center>
        </div>
        <div height="70%">
          <div margin-top="3em">
            {props.currentSelected.map((item) => (
              <div key={item.label}>
                <Tag
                  color="green.600"
                  backgroundColor="gray.50"
                  mt={2}
                  borderRadius={5}
                  variant="solid"
                  width={200}
                >
                  <Avatar src={item.image_url} mr={2} ml={-1} />
                  <TagLabel>{item.label} </TagLabel>
                  <TagCloseButton onClick={() => deselectRecipe(item)} />
                </Tag>
              </div>
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
              <StatNumber>{getStats('calories')}</StatNumber>
            </Stat>
          </Flex>
          <Flex m={2}>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="orange">
                Fat
              </Badge>
              <StatLabel>Total Fat </StatLabel>
              <StatNumber>{getStats('fat')}</StatNumber>
            </Stat>
          </Flex>
          <Flex m={2}>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="pink">
                Carbs
              </Badge>
              <StatLabel>Total Carbs</StatLabel>
              <StatNumber>{getStats('carbs')}</StatNumber>
            </Stat>
          </Flex>
          <Flex m={2}>
            <Stat>
              <Badge borderRadius="full" px="2" colorScheme="red">
                Protein
              </Badge>
              <StatLabel>Total Protein</StatLabel>
              <StatNumber>{getStats('protein')}</StatNumber>
            </Stat>
          </Flex>
        </Flex>
      </div>
      <div style={{ marginTop: '2em' }}>
        <Button
          variant="outline"
          colorScheme="green"
          onClick={() => sendParams()}
        >
          Create Your Mealplan
        </Button>
      </div>
    </>
  );
}
