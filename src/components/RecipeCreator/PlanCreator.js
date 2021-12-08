import {
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Flex,
  Center,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function PlanCreator(props) {

  let navigate = useNavigate();

  const { currentSelected, updateSelected } = props
  const { currentStats } = props

  const [planLabel, setPlanLabel] = useState(null)


  let planParams = null

  const parsePlanParams = () => {
    if(currentSelected[2]){
      planParams = {
        'label': planLabel,
        'first': currentSelected[0].id.toString(), 
        'second': currentSelected[1].id.toString(), 
        'third': currentSelected[2].id.toString()
      }
    }
    
  }

  const deselectRecipe = (clickedItem) => {
    updateSelected(currentSelected.filter(selectedItem => selectedItem.id !== clickedItem.id))
    // updateCurrentStats({
    //   ...currentStats, 

    // })

  }

  const getCreatedPlan = async (planParams) => {
    // 'http://localhost:4000/plans/new'
    const url = 'https://mealstack-backend.herokuapp.com/recipes/new'

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
    return (json)
  }

  parsePlanParams()



  const sendParams = async () => {
    parsePlanParams()

    if (planParams) {
      console.log(planParams)
      let newPlan = await getCreatedPlan(planParams)
      console.log(newPlan)
      navigate(`/plan/${newPlan.id}`)
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
        <StatNumber>{currentStats.calories}</StatNumber>
      </Stat>
      </Flex>
      <Flex m={2}>
        <Stat>
        <Badge borderRadius="full" px="2" colorScheme="orange">
                    Fat
        </Badge>
        <StatLabel>Total Fat </StatLabel>
          <StatNumber>{currentStats.fat}</StatNumber>
        </Stat>
      </Flex>
      <Flex m={2}>
        <Stat>
        <Badge borderRadius="full" px="2" colorScheme="pink">
                    Carbs
        </Badge>
        <StatLabel>Total Carbs</StatLabel>
          <StatNumber>{currentStats.carbs}</StatNumber>
        </Stat>
      </Flex>
      <Flex m={2}>
        <Stat>
        <Badge borderRadius="full" px="2" colorScheme="red">
                    Protein
        </Badge>
        <StatLabel>Total Protein</StatLabel>
          <StatNumber>{currentStats.protein}</StatNumber>
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
