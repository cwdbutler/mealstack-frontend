import { Link } from 'react-router-dom';
import {
  Box,
  Image,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

export default function UserPlan({ userPlan }) {
  console.log('hello');
  const { plan } = userPlan;
  console.log(plan);

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
      <Link to={`/plan/${plan.id}`}>
        <Image src={plan.recipes[0].recipe.image_url} alt="Plan preview" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Calories
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {plan.calories}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {plan.name}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            <Stat>
              <StatLabel>Protein</StatLabel>
              <StatNumber>{plan.protein}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Fat</StatLabel>
              <StatNumber>{plan.fat}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Carbs</StatLabel>
              <StatNumber>{plan.carbs}</StatNumber>
            </Stat>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
