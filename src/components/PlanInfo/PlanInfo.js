import usePlanInfo from '../../hooks/usePlanInfo';
import Plan from './DetailedPlan';
import NotFound from '../NotFound';
import { Center, Spinner, Heading } from '@chakra-ui/react';

export default function PlanInfo() {
  const [planInfo, loading] = usePlanInfo();

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
