import { useToast, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { userContext } from '../Context';

export default function SavePlanButton() {
  const { user } = useContext(userContext);
  const toast = useToast();
  // needs testing on prod

  const savePlan = async (planId, planName) => {
    let res;
    try {
      res = await fetch(
        `https://mealstack-backend.herokuapp.com/user/plans/${planId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userid: user.id }),
        }
      );
    } catch (err) {
      res = new Response(JSON.stringify({ error: 'true' }));
    }
    const json = await res.json();
    if (json.createdAt) {
      toast({
        title: 'Saved',
        description: `${planName} has been saved to your account`,
        status: 'success',
        duration: 3000,
        variant: 'subtle',
        isClosable: true,
      });
    }
  };

  return <Button onClick={savePlan}>Save</Button>;
}
