import { useState, useEffect } from 'react';

export const useUserFetcher = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);  // Asigna los datos al estado "user"
      } catch (err) {
        setError(err.message); // Almacena el mensaje de error
      } finally {
        setLoading(false); // Cambia el estado de "loading" a false cuando termine la operación
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error }; // Devuelve el estado: usuario, carga y error
};
 