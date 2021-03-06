import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context';
import { Center, Box } from '@chakra-ui/layout';
import { Heading, Spinner } from '@chakra-ui/react';
import UserPlanIndex from './UserPlanIndex';
import useUserPlans from '../../hooks/useUserPlans';

export default function Dashboard() {
  const { user } = useContext(userContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });
  const [reload, setReload] = useState(0);
  const [plansList, loading] = useUserPlans(user.id, reload);
  const forceReload = () => {
    setReload(reload + 1);
  };

  return (
    <Box p={10}>
      <Center mt={5}>
        <Heading>Your saved plans</Heading>
      </Center>
      {loading ? (
        <Center mt={5}>
          <Spinner size="xl" thickness="2px" speed="0.65s" color="teal.200" />
        </Center>
      ) : (
        <UserPlanIndex plans={plansList} forceReload={forceReload} />
      )}
    </Box>
  );
}
