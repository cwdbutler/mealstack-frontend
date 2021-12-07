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

import usePlanCreator from '../../hooks/usePlanCreator';

import { useState } from 'react';

export default function PlanCreator(props) {

    const [createdPlan, setCreatedPlan] = useState([])
  
    
  
 
 


  const { currentSelected, updateSelected } = props

  const [planLabel, setPlanLabel] = useState(null)

  let planParams = null

  const parsePlanParams = () => {
    if(currentSelected){
      planParams = {
        'label': planLabel,
        'first': currentSelected[0].id.toString(), 
        'second': currentSelected[1].id.toString(), 
        'third': currentSelected[2].id.toString()
      }
    }
    
  }

  // const [createdPlan , loading] = usePlanCreator(planParams);



  const deselectRecipe = (clickedItem) => {
    updateSelected(currentSelected.filter(selectedItem => selectedItem.id !== clickedItem.id))
  }

  const getCreatedPlan = async (planParams) => {
    // https://mealstack-backend.herokuapp.com/recipes/new
    const url = 'http://localhost:3000/recipes/new'

    const res = await fetch(url, {
      method: 'POST', 
      body: new URLSearchParams({
        'label': planParams.label,
        'first': planParams.first, 
        'second': planParams.second, 
        'third': planParams.third
      })
    })
    const json = await res.json();

    setCreatedPlan(json);
  }

  parsePlanParams()


  const sendParams = () => {
    parsePlanParams()

    if (planParams) {
      console.log(planParams)
       return getCreatedPlan(planParams)
    } else {
      console.log(planParams)
      console.log("You need full params")
    }
  }




  return ( 
  
  <> 
    <div>      
      <Center mt={3}>Plan Name</Center> 
      <input onChange={(e) => {setPlanLabel(e.target.value);}} placeholder="Enter a plan name"/> 
    </div>
    <div>
      <div height="30%">    
        <Center mt={3}>Recipes selected</Center> 
      </div> 
      <div height="70%">
        <div>
          {props.currentSelected.map((item)=> (
            <Center key={item.label} > 
            {item.label} 
            <button onClick={()=>deselectRecipe(item)}>X</button>
            </Center>))}
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
    <div style={{ "margin-top": "2em"}}>
      <button 
      onClick={()=>sendParams()}
      margin="3">Create Mealplan</button>
    </div>
  </>
  )
}