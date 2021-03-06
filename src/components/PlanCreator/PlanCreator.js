import SearchBar from './SearchBar';
import SearchIndex from './SearchIndex';
import { useState } from 'react';
import useGeneratedPlan from '../../hooks/useGeneratedPlan';

export default function PlanCreator() {
  const [formData, setFormData] = useState(null);
  const [plan] = useGeneratedPlan(formData);
  return (
    <>
      <SearchBar formData={formData} setFormData={setFormData} />
      <SearchIndex plan={plan} />
    </>
  );
}
