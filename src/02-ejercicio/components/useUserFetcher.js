// useUserFetcher.js
import { useState, useEffect } from 'react';

export const useUserFetcher = () => {
  const [users, setUsers] = useState([]); // Cambiar a un array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    const fetchUsers = async () => { // Cambiar a fetchUsers
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);  // Asigna la lista de usuarios al estado "users"
      } catch (err) {
        setError(err.message); // Almacena el mensaje de error
      } finally {
        setLoading(false); // Cambia el estado de "loading" a false cuando termine la operación
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error }; // Devuelve el estado: usuarios, carga y error
};
