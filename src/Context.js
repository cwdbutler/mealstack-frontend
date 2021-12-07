import { createContext, useEffect, useState } from 'react';

export const myContext = createContext(null);

export default function Context(props) {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const url = 'http://localhost:4000/user';

    let data;
    try {
      data = await fetch(url, { method: 'GET', credentials: 'include' });
    } catch (err) {
      console.log('Error fetching user');
      data = new Response({ error: true });
    }
    const response = await data.json();

    if (response.logged_in) {
      setUser(response.user);
    }
  };

  useEffect(() => getUser(), []);

  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
