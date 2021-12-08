import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context';
import { Center, Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import UserPlanIndex from './UserPlanIndex';

export default function Dashboard() {
  const { user } = useContext(userContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  // a hook that fetches all plans the user saved

  return (
    <Box p={10}>
      <Center mt={5}>
        <Heading>Your saved plans</Heading>
      </Center>
      <UserPlanIndex />
    </Box>
  );
}
