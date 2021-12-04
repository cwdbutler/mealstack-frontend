import { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/button';
import { Box, Center, Stack } from '@chakra-ui/layout';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';

export default function PlanGeneratorForm() {
  const initialFormData = {
    protein: 100,
    fats: 100,
    carbs: 100,
    calories: 2000
  }

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    console.log();
    setFormData({
      ...formData,
    [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(e.target); 
  };

  return (
    <Center h="90vh">
      <Box w="50vh">
        <FormControl as="fieldset">
          <Stack spacing={4}>
            <FormControl id="protein">
              <FormLabel>Protein</FormLabel>
              <NumberInput step={10} defaultValue={formData.protein} min={0} max={300}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="fats">
              <FormLabel>Fats</FormLabel>
              <NumberInput step={10} defaultValue={formData.fats} min={0} max={300}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="carbs">
              <FormLabel>Carbs</FormLabel>
              <NumberInput step={10} defaultValue={formData.carbs} min={0} max={300}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="calories">
              <FormLabel>Calories</FormLabel>
              <NumberInput step={100} defaultValue={formData.calories} min={500} max={8000}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Button onClick={handleSubmit}>Search plans</Button>
            <FormHelperText textAlign="center">
              Find your Mealstack
            </FormHelperText>
          </Stack>
        </FormControl>
      </Box>
    </Center>
  );
}
