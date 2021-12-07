import { Button } from '@chakra-ui/button';
import { useContext } from 'react';
import { userContext } from '../../Context';

export default function LogoutButton() {
  const { setUser } = useContext(userContext);
  const logout = async () => {
    let res;
    try {
      res = await fetch('https://mealstack-backend.herokuapp.com/logout', {
        credentials: 'include',
        method: 'POST',
      });
    } catch (err) {
      console.log('Error logging out, please try again');
    }

    const json = await res.json();

    if (json.logged_out) {
      setUser(null);
    }
  };

  return (
    <Button mr="2" onClick={logout}>
      Logout
    </Button>
  );
}
