import { createContext, useEffect, useState } from 'react';

export const myContext = createContext(null);

export default function Context(props) {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const url = 'http://localhost:4000/user';

    let res;
    try {
      res = await fetch(url, { method: 'GET', credentials: 'include' });
    } catch (err) {
      res = new Response(JSON.stringify({ error: 'true' }));
    }
    const json = await res.json();

    if (json) {
      setUser(json);
      console.log('user data:', json);
    }
  };

  useEffect(() => getUser(), []);

  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
