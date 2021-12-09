import { useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import { userContext } from '../Context';
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';

export default function SavePlanButton({ name, id }) {
  const { user } = useContext(userContext);
  let navigate = useNavigate();
  const toast = useToast();

  const savePlan = async () => {
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
    if (json.createdAt) {
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
  if (user) {
    return (
      <IconButton
        bg="none"
        aria-label="Save plan"
        onClick={savePlan}
        _hover={{ bg: 'none' }}
        _active={{
          bg: 'none',
        }}
        _focus={{
          bg: 'none',
        }}
        icon={<PlusSquareIcon w={8} h={8} color="green.200" />}
      />
    );
  } else {
    return (
      <Popover>
        <PopoverTrigger>
          <IconButton
            bg="none"
            aria-label="Save plan"
            _hover={{ bg: 'none' }}
            _active={{
              bg: 'none',
            }}
            _focus={{
              bg: 'none',
            }}
            icon={<PlusSquareIcon w={8} h={8} color="green.200" />}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Button onClick={() => navigate('/login')}>Login</Button>
              {'  to save this plan'}
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    );
  }
}
