import { Stack, Divider } from '@chakra-ui/layout';
import {
  Input,
  InputRightElement,
  Button,
  FormControl,
  InputGroup,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';

export default function SearchForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={4}>
            <Field name="username">
              {({ field }) => (
                <FormControl>
                  <Input {...field} id="username" placeholder="Username" />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field }) => (
                <FormControl>
                  <InputGroup size="md">
                    <Input
                      {...field}
                      pr="4.5rem"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <Divider />
            <Button
              type="submit"
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              aria-label="Search plans"
            >
              Log in{' '}
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
