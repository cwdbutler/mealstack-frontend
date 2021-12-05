import usePlanInfo from '../../hooks/usePlanInfo';
import { useParams } from 'react-router-dom';
import Plan from './Plan';

export default function PlanInfo() {
  const { id } = useParams();
  const [planInfo] = usePlanInfo(id);

  if (planInfo === undefined) {
    return <h1>Still loading...</h1>;
  }

  return <Plan plan={planInfo} />;
}
