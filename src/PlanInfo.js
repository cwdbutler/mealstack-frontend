import {
  Grid,
  GridItem,
  Heading,
  Box,
  Flex,
  Spacer,
  Image,
  ListItem,
  UnorderedList,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Badge,
} from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';

export default function PlanInfo() {
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
        <GridItem rowSpan={3} colSpan={4} bg="papayawhip">
          <Flex h="100%" p="5">
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m="4"
            >
              <Image
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
                alt="recipe image"
              />

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
                    312i310
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  plan name
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  <Stat>
                    <StatLabel>Protein</StatLabel>
                    <StatNumber>43242</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Fat</StatLabel>
                    <StatNumber>77445</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Carbs</StatLabel>
                    <StatNumber>32131231</StatNumber>
                  </Stat>
                </Box>
              </Box>
            </Box>
            <Spacer />
            <Box bg="yellow" w="60%" borderRadius="10">
              Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet
              adipiscing ipsum dolor sit amet adipiscing ipsum dolor sit amet
              adipiscing ipsum dolor sit amet adipiscing
            </Box>
          </Flex>
        </GridItem>
        <GridItem rowSpan={10} colSpan={2}>
          <Flex
            d="column"
            h="100%"
            p="5"
            overflow="scroll"
            border="2px"
            borderColor="gray.200"
            borderRadius="10"
          >
            <Heading>Shopping List</Heading>
            <UnorderedList mt="5">
              <Stack spacing={4}>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </Stack>
            </UnorderedList>
          </Flex>
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} bg="papayawhip">
          Lunch
        </GridItem>
        <GridItem rowSpan={3} colSpan={4} bg="papayawhip">
          Dinner
        </GridItem>
        <GridItem rowSpan={1} colSpan={4} bg="papayawhip">
          Total Macros
        </GridItem>
      </Grid>
    </>
  );
}
