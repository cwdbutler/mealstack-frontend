// import { Center, Box } from '@chakra-ui/layout';
import UserPlan from './UserPlan';

export default function UserPlanIndex(plans) {
  // map the plans array
  return <UserPlan props={plans} />;
}
