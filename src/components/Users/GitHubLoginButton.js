import { Stack } from '@chakra-ui/layout';
import { Image, Button } from '@chakra-ui/react';

import githubLogo from '../../assets/github.svg.png';

export default function GitHubLoginButton() {
  const gitHubLogin = () => {
    window.open('https://mealstack-backend.herokuapp.com/auth/github', '_self');
  };
  return (
    <Stack direction="row" spacing={4}>
      <Button
        onClick={gitHubLogin}
        leftIcon={
          <Image
            src={githubLogo}
            alt="GitHub logo"
            boxSize="30px"
            objectFit="cover"
          />
        }
        colorScheme="gray"
        variant="solid"
      >
        Sign in with GitHub
      </Button>
    </Stack>
  );
}
