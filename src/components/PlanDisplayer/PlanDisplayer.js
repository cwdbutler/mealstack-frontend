import usePlanList from "../../hooks/usePlanList";
import Plan from "../Search/Plan";
import NotFound from "../NotFound";
import { Center, Spinner, Heading } from '@chakra-ui/react'

export default function PlanDisplayer(){
  const [planList, loading] = usePlanList();

  if (loading) {
    return (
      <Center h="100%" mt={5}>
        <Spinner size="xl" thickness="2px" speed="0.65s" color="teal.200" />
      </Center>
    );
  }

  if (planList.error) {
    return (
      <Center h="100%">
        <Heading>{'Sorry, there seems to be a server error 🙁'}</Heading>
      </Center>
    );
  }

  if (!planList) {
    return <NotFound />;
  }

  if (planList){
    const displayedPlans = planList.map((plan)=> (

       <Plan plan={plan} key={plan.id}/>
   ))
  
   return <> {displayedPlans} </>
    
  } 
  
}