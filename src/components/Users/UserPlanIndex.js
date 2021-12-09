import { Center, Stack, Heading, Wrap } from '@chakra-ui/layout';
import UserPlan from './UserPlan';

export default function UserPlanIndex(props) {
  const userPlans = props.plans.map((userPlan) => {
    return <UserPlan key={userPlan.planId} userPlan={userPlan} />;
  });

  return (
    <Center mt={5}>
      {userPlans.length > 0 ? (
        <Wrap>{userPlans}</Wrap>
      ) : (
        <Stack spacing={10}>
          <Heading mt={20} textAlign="center" size="lg" color="gray.600">
            Looks like you haven't saved any plans yet...
          </Heading>
        </Stack>
      )}
    </Center>
  );
}
