import { useToast, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { userContext } from '../Context';
import { DeleteIcon } from '@chakra-ui/icons';

export default function DeletePlanButton({ name, id }) {
  const { user } = useContext(userContext);
  const toast = useToast();

  const deletePlan = async () => {
    let res;
    try {
      res = await fetch(
        `https://mealstack-backend.herokuapp.com/user/plans/${id}`,
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
    if (json.planId) {
      toast({
        title: 'Saved',
        description: `${name} has been saved to your account`,
        status: 'success',
        duration: 3000,
        variant: 'subtle',
        isClosable: true,
      });
    }
  };

  return <Button onClick={deletePlan}>Save</Button>;
}
