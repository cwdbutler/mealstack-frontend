import usePlanInfo from '../../hooks/usePlanInfo';
import { useParams } from 'react-router-dom';
import Plan from './Plan';
import NotFound from '../NotFound';
import { Center, Spinner, Heading } from '@chakra-ui/react';

export default function PlanInfo() {
  const { id } = useParams();
  const [planInfo, loading] = usePlanInfo(id);

  if (loading) {
    return (
      <Center h="100%" mt={5}>
        <Spinner size="xl" thickness="2px" speed="0.65s" color="teal.200" />
      </Center>
    );
  }

  if (planInfo.error) {
    return (
      <Center h="100%">
        <Heading>{'Sorry, there seems to be a server error 🙁'}</Heading>
      </Center>
    );
  }

  if (!planInfo) {
    return <NotFound />;
  }

  return <Plan plan={planInfo} />;
}
