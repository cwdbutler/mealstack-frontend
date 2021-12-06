import { Stack, Divider } from '@chakra-ui/layout';
import { Input, Button } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { createSearchParams, useNavigate } from 'react-router-dom';

export default function SearchForm() {
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        navigate({
          pathname: 'search',
          search: `?${createSearchParams(values)}`,
        });
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name="username">
              {({ field, form }) => (
                <FormControl id="username">
                  <FormLabel htmlFor="username" textAlign="center">
                    Username
                  </FormLabel>
                  <Input
                    id="username"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                  />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl id="password">
                  <FormLabel htmlFor="password" textAlign="center">
                    Password
                  </FormLabel>
                  <Input
                    id="password"
                    {...field}
                    onChange={(val) => form.setFieldValue(field.name, val)}
                  />
                </FormControl>
              )}
            </Field>
            <Divider />
            <Button
              type="submit"
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
            >
              Log in
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
