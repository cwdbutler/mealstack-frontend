import { Stack, Center } from '@chakra-ui/layout';
import { Image, Button, Heading } from '@chakra-ui/react';
import { Formik, Form } from 'formik';

import githubLogo from '../../assets/github.svg.png';

export default function GitHubLoginForm() {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        window.open('http://localhost:4000/auth/github', '_self');
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={4}>
            <Heading as="h6" size="xs" textAlign="center" color="gray.500">
              OR
            </Heading>
            <Center>
              <Image
                src={githubLogo}
                alt="GitHub logo"
                boxSize="40px"
                objectFit="cover"
              />
            </Center>
            <Button
              type="submit"
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              aria-label="Search plans"
            >
              Sign in with GitHub{' '}
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
