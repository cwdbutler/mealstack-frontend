import { Grid, GridItem, Heading } from '@chakra-ui/react';
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
          Breakfast
        </GridItem>
        <GridItem rowSpan={10} colSpan={2} bg="tomato">
          Shopping List
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
