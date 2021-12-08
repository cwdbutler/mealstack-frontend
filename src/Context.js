import { createContext, useEffect, useState } from 'react';

export const userContext = createContext(null);

export default function Context(props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const url = 'https://mealstack-backend.herokuapp.com/user';

    let data;
    try {
      data = await fetch(url, { method: 'GET', credentials: 'include' });
    } catch (err) {
      console.log('Error fetching user');
      data = new Response({ error: true });
    }
    const response = await data.json();

    setUser(response.user);
    setLoading(false);
  };

  useEffect(() => getUser(), []);

  return (
    <userContext.Provider value={{ user, setUser, loading }}>
      {props.children}
    </userContext.Provider>
  );
}
