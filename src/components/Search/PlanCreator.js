import PlanGeneratorForm from './PlanGeneratorForm';

export default function PlanCreator() {
  const [formData, updateFormData] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  };

  return <PlanGeneratorForm />;
}
