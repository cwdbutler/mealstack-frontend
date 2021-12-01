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
            <Image
              src="https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Chocolate-Chip-Pancakes.png"
              alt="Breakfast"
              borderRadius="10"
            />
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
