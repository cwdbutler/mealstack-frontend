import {
  useToast,
  Button,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { userContext } from '../Context';
import { CloseIcon } from '@chakra-ui/icons';

export default function DeletePlanButton({ name, id, forceReload }) {
  const { user } = useContext(userContext);
  const toast = useToast();

  const deletePlan = async () => {
    let res;
    try {
      res = await fetch(
        `https://mealstack-backend.herokuapp.com/user/plans/${id}`,
        {
          method: 'DELETE',
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
        title: 'Deleted',
        description: `${name} has removed from your plans`,
        status: 'info',
        duration: 3000,
        variant: 'subtle',
        isClosable: true,
      });
      forceReload();
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          bg="none"
          aria-label="Delete plan"
          _hover={{ bg: 'none' }}
          _active={{
            bg: 'none',
          }}
          _focus={{
            bg: 'none',
          }}
          icon={<CloseIcon w={5} h={5} color="red.300" />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Button onClick={deletePlan} color="white" bg="red.400">
              Remove
            </Button>
            {'  this plan?'}
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
