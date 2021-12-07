import { Button } from '@chakra-ui/button';

export default function LogoutButton() {
  const logout = async () => {
    try {
      fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST',
      });
    } catch (err) {
      console.log('Error logging out, please try again');
    }
  };

  return (
    <Button mr="2" onClick={logout}>
      Logout
    </Button>
  );
}
