import { Link } from 'react-router-dom';
import {
  Box,
  Image,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

export default function Plan(props) {
  const plan = props.plan;
  const recipes = props.plan.recipes;

  const fallbackUrl = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=';

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
      <Link to={`/plan/${plan.id}`}>
        <Image boxSize='300px' src={recipes[0].recipe.image_url} fallbackSrc={fallbackUrl}/>

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
