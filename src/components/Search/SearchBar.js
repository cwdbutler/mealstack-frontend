import { VStack, HStack, Center } from '@chakra-ui/layout';
import { SearchIcon } from '@chakra-ui/icons';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputRightElement,
  IconButton,
  Checkbox,
  Stack,
} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { createSearchParams, useNavigate } from 'react-router-dom';

export default function SearchForm({ params }) {
  let navigate = useNavigate();

  const defaultMacros = {
    protein: '150',
    fat: '50',
    carbs: '200',
    calories: '2000',
  };

  return (
    <Center p={20} w="100%">
      <Formik
        initialValues={{
          protein: params.get('protein')? `${params.get('protein')}`: defaultMacros.protein,
          fat: params.get('fat') ? `${params.get('fat')}` : defaultMacros.fat,
          carbs: params.get('carbs') ? `${params.get('carbs')}` : defaultMacros.carbs,
          calories: params.get('calories') ? `${params.get('calories')}` : defaultMacros.calories,
          dairyFree: false,
          glutenFree: false,
          kosher: false,
          peanutFree: false,
          porkFree: false,
          vegan: false,
          vegetarian: false
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          navigate({
            search: `?${createSearchParams(values)}`,
          });
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <HStack
              spacing={10}
              pb={4}
              pt={6}
              pr={10}
              pl={10}
              borderRadius="lg"
              boxShadow="lg"
              border="1px"
              borderColor="gray.100"
            >
              <VStack>
              <HStack>
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
                      mb={8}
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
                      mb={8}
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
                      max={500}
                      mb={8}
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
                      mb={8}
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
              </HStack>
                <Stack spacing={10} direction='row'>
                  <Field name="dairyFree">
                    {({ field, form }) => (
                      <FormControl id="dairyFree">
                        <Checkbox defaultIsClicked colorScheme='teal' id="dairyFree"
                          {...field}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}>
                          Dairy Free
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="glutenFree">
                    {({ field, form }) => (
                      <FormControl id="glutenFree">
                        <Checkbox defaultIsClicked colorScheme='teal' id="glutenFree"
                          {...field}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}>
                          Gluten Free
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="kosher">
                    {({ field, form }) => (
                      <FormControl id="kosher">
                        <Checkbox defaultIsClicked colorScheme='teal' id="kosher"
                          {...field}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}>
                          Kosher
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="peanutFree">
                    {({ field, form }) => (
                      <FormControl id="peanutFree">
                        <Checkbox defaultIsClicked colorScheme='teal' id="peanutFree"
                          {...field}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}>
                          Peanut Free
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="porkFree">
                    {({ field, form }) => (
                      <FormControl id="porkFree">
                        <Checkbox defaultIsClicked colorScheme='teal' id="porkFree"
                          {...field}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}>
                          Pork Free
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="vegan">
                    {({ field, form }) => (
                      <FormControl id="vegan">
                        <Checkbox defaultIsClicked colorScheme='teal' id="vegan"
                          {...field}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}>
                          Vegan
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="vegetarian">
                    {({ field, form }) => (
                      <FormControl id="vegetarian">
                        <Checkbox defaultIsClicked colorScheme='teal' id="vegetarian"
                          {...field}
                          onChange={(e) => form.setFieldValue(field.name, e.target.checked)}>
                          Vegetarian
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
              </Stack>
              </VStack>
              <IconButton
                type="submit"
                colorScheme="teal"
                isLoading={props.isSubmitting}
                aria-label="Search plans"
                icon={<SearchIcon />}
              />
            </HStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
}
