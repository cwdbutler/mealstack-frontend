

import {
  Badge,
  Stat,
  StatLabel,
  StatNumber, 
  Flex,
  Input,
  Center,
  Button
} from '@chakra-ui/react';




export default function PlanCreator(props) {

  // props.updateSelected() 

  // props.currentSelected

  // console.log(recipesSelected)

  // let selected = []

  // const addToSelected = (item) => {
  //   selected.push(item)
  // }

  // console.log(selected)


//Every time you click on a recipe "add recipe" button on each recipe -> it store a recipe in the recipesSelected state array
//That way, recipes can be selected, and you can search for something else 


  return ( 
  
  <> 
    <div>      
      <Center mt={3}>Plan Name</Center> 
      <Input mt={3} placeholder="Enter a plan name"/> 
    </div>
    <div>
      <div height="30%">    
        <Center mt={3}>Recipes selected</Center> 
      </div> 
      <div height="70%">
        <div>
          {props.currentSelected.map((item)=> (
            <Center key={item.label} > {item.label} </Center>))}
        </div>
      </div> 
      {/* < MultiSelect options={props.filteredList} onSelect={addToSelected(recipesSelected)} onChange={setRecipesSelected} value={recipesSelected} labelledBy="Select" hasSelectAll={false} disableSearch={true}/>  */}
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
    <div>
      <Button mt={3}>
              Create Mealplan
        </Button>
    </div>
  
  {/* Plan form 
  <Grid templateColumns="repeat(4, 1fr)">
    <GridItem colspan={3}>
    < MultiSelect options={props.filteredList} onChange={setRecipesSelected} value={recipesSelected} labelledBy="Select" hasSelectAll={false} disableSearch={true}/> 
    </GridItem>
    <GridItem>
      <Input placeholder="Enter a plan name"/>
    </GridItem>
    <Flex justify="right" m={5}>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                            Calories
                </Badge>
                <StatLabel>Total Calories</StatLabel>
                  <StatNumber>0</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="orange">
                            Fat
                </Badge>
                <StatLabel>Total Fat </StatLabel>
                  <StatNumber>0</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="pink">
                            Carbs
                </Badge>
                <StatLabel>Total Carbs</StatLabel>
                  <StatNumber>0</StatNumber>
                </Stat>
                <Stat>
                <Badge borderRadius="full" px="2" colorScheme="red">
                            Protein
                </Badge>
                <StatLabel>Total Protein</StatLabel>
                  <StatNumber>0</StatNumber>
                </Stat>       
        <Button>
              Create Mealplan
        </Button>        
      </Flex>
  </Grid> */}

  </>

  
  )
}