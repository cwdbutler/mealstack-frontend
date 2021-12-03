import { Button } from '@chakra-ui/button';
import { Box, Center, Stack } from '@chakra-ui/layout';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

export default function SearchForm() {
  return (
    <Center h="90vh">
      <Box w="50vh">
        <Formik
          initialValues={{
            protein: '80',
            fat: '80',
            carbs: '80',
            calories: '2000',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // async fetch POST to server goes here
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Stack spacing={4}>
                <Field name="protein">
                  {({ field, form }) => (
                    <FormControl id="protein">
                      <FormLabel htmlFor="protein">Protein</FormLabel>
                      <NumberInput
                        id="protein"
                        {...field}
                        onChange={(val) => form.setFieldValue(field.name, val)}
                        step={10}
                        defaultValue={80}
                        min={0}
                        max={300}
                      >
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
                      <FormLabel htmlFor="fat">Calories</FormLabel>
                      <NumberInput
                        id="fat"
                        {...field}
                        onChange={(val) => form.setFieldValue(field.name, val)}
                        step={10}
                        defaultValue={80}
                        min={0}
                        max={300}
                      >
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
                      <FormLabel htmlFor="carbs">Calories</FormLabel>
                      <NumberInput
                        id="carbs"
                        {...field}
                        onChange={(val) => form.setFieldValue(field.name, val)}
                        step={10}
                        defaultValue={80}
                        min={0}
                        max={300}
                      >
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
                      <FormLabel htmlFor="calories">Calories</FormLabel>
                      <NumberInput
                        id="calories"
                        {...field}
                        onChange={(val) => form.setFieldValue(field.name, val)}
                        step={100}
                        defaultValue={2000}
                        min={1500}
                        max={4000}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
                {/* <pre>{JSON.stringify(props.values, null, 2)}</pre> */}
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Center>
  );
}
