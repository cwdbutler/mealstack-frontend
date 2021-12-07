import { useState, useEffect } from 'react';
import { HStack, Center } from '@chakra-ui/layout';
import { SearchIcon } from '@chakra-ui/icons';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';

export default function SearchForm({formData, setFormData}) {
  const defaultMacros = {
    protein: '150',
    fat: '50',
    carbs: '200',
    calories: '3000',
  };

  const handleSubmit = (e) => {
    setFormData({
      protein: e.protein,
      fat: e.fat,
      calories: e.calories,
      carbs: e.carbs
    })
  };

  return (
    <Center p={20} w="100%">
      <Formik
        initialValues={{
          protein: formData != null
            ? `${formData.protein}`
            : defaultMacros.protein,
          fat: formData != null ? `${formData.fat}` : defaultMacros.fat,
          carbs: formData != null
            ? `${formData.carbs}`
            : defaultMacros.carbs,
          calories: formData != null
            ? `${formData.calories}`
            : defaultMacros.calories,
        }}
        onSubmit={(values, { setSubmitting }) => {
          // navigate({
          //   search: `?${createSearchformData(values)}`,
          // });
          handleSubmit(values);
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
              <Field name="protein">
                {({ field, form }) => (
                  <FormControl id="protein">
                    <FormLabel htmlFor="protein" textAlign="center">
                      Protein
                    </FormLabel>
                    <NumberInput
                      id="protein"
                      {...field}
                      onChange={(val) => {
                        form.setFieldValue(field.name, val);
                      }}
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
                      onChange={(val) => {
                        form.setFieldValue(field.name, val);
                      }}
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
                      onChange={(val) => {
                        form.setFieldValue(field.name, val);
                      }}
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
                      onChange={(val) => {
                        form.setFieldValue(field.name, val);
                      }}
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
