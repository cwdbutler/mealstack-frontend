import { HStack, Divider, Box } from '@chakra-ui/layout';
import { SearchIcon } from '@chakra-ui/icons';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputRightElement,
  Heading,
  IconButton,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

export default function SearchForm({ params }) {
  const defaultMacros = {
    protein: '150',
    fat: '50',
    carbs: '200',
    calories: '2000',
  };

  return (
    <Formik
      initialValues={{
        protein: params.get('protein')
          ? `${params.get('protein')}`
          : defaultMacros.protein,
        fat: params.get('fat') ? `${params.get('fat')}` : defaultMacros.fat,
        carbs: params.get('carbs')
          ? `${params.get('carbs')}`
          : defaultMacros.carbs,
        calories: params.get('calories')
          ? `${params.get('calories')}`
          : defaultMacros.calories,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Flex h="10vh" bg="tomato" mt={10}>
          <Form>
            <Field name="protein">
              {({ field, form }) => (
                <FormControl id="protein">
                  <FormLabel htmlFor="protein" textAlign="center">
                    Protein
                  </FormLabel>
                  <NumberInput
                    id="protein"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    step={10}
                    min={0}
                    max={300}
                    allowMouseWheel
                  >
                    <InputRightElement
                      pointerEvents="none"
                      children="g"
                      mr={6}
                    />
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Field>
            <Spacer />
            <Field name="fat">
              {({ field, form }) => (
                <FormControl id="fat">
                  <FormLabel htmlFor="fat" textAlign="center">
                    Fat
                  </FormLabel>
                  <NumberInput
                    id="fat"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    step={10}
                    min={0}
                    max={300}
                    allowMouseWheel
                  >
                    <InputRightElement
                      pointerEvents="none"
                      children="g"
                      mr={6}
                    />
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Field>
            <Spacer />
            <Field name="carbs">
              {({ field, form }) => (
                <FormControl id="carbs">
                  <FormLabel htmlFor="carbs" textAlign="center">
                    Carbs
                  </FormLabel>
                  <NumberInput
                    id="carbs"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    step={10}
                    min={0}
                    max={300}
                    allowMouseWheel
                  >
                    <InputRightElement
                      pointerEvents="none"
                      children="g"
                      mr={6}
                    />
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Field>
            <Spacer />
            <Field name="calories">
              {({ field, form }) => (
                <FormControl id="calories">
                  <FormLabel htmlFor="calories" textAlign="center">
                    Calories
                  </FormLabel>
                  <NumberInput
                    id="calories"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                    step={100}
                    min={1500}
                    max={4000}
                    allowMouseWheel
                  >
                    <InputRightElement
                      pointerEvents="none"
                      children="kcal"
                      mr="2.1rem"
                    />
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Field>
            <Divider />
            <IconButton
              type="submit"
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              aria-label="Search plans"
              icon={<SearchIcon />}
            />
          </Form>
        </Flex>
      )}
    </Formik>
  );
}
