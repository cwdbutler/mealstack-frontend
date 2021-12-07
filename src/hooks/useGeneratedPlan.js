import { useState, useEffect } from 'react';

const useGeneratedPlan = (formData) => {
  const [plan, setPlan] = useState(null);
  
  useEffect(() => {
    const getPlan = async () => {
      if (formData != null) {
        const { calories, carbs, protein, fat } = formData;
        const url = `https://mealstack.herokuapp.com/plans/new/custom`;
        console.log(formData);
        let fetchBody = {
          "calories": calories,
          "carbs": carbs,
          "protein": protein,
          "fat": fat
        };
  
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fetchBody)
        });
        const json = await res.json();
        const customPlan = await json.body;
  
      setPlan(customPlan);
      }
    }
    getPlan()
  }, [formData]);

  return [plan];
};

export default useGeneratedPlan;
