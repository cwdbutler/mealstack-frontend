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
  return (
    <Center h="90vh">
      <Box w="50vh">
        <FormControl as="fieldset">
          <Stack spacing={4}>
            <FormControl id="protein">
              <FormLabel>Protein</FormLabel>
              <NumberInput step={10} defaultValue={100} min={0} max={300}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="fats">
              <FormLabel>Fats</FormLabel>
              <NumberInput step={10} defaultValue={100} min={0} max={300}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="carbs">
              <FormLabel>Carbs</FormLabel>
              <NumberInput step={10} defaultValue={100} min={0} max={300}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id="calories">
              <FormLabel>Calories</FormLabel>
              <NumberInput step={100} defaultValue={2000} min={500} max={8000}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Button>Search plans</Button>
            <FormHelperText textAlign="center">
              Find your Mealstack
            </FormHelperText>
          </Stack>
        </FormControl>
      </Box>
    </Center>
  );
}
