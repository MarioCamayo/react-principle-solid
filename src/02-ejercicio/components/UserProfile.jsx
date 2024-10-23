// UserProfile.jsx
import React from 'react';
import { useUserFetcher } from './useUserFetcher';
import { transformUserData } from './transformUserData';

export const UserProfile = () => {
  const { users, loading, error } = useUserFetcher(); // Ahora el hook devuelve un array de usuarios
  const transformedUsers = transformUserData(users); // Transformamos todos los usuarios

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (transformedUsers.length === 0) return <p>No user data available</p>;

  return (
    <div>
      <h1>User Profiles</h1>
      {transformedUsers.map((user) => (
        <div key={user.id}> {/* Asegúrate de usar una clave única */}
          <p>Name: {user.fullName}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.transformedAddress}</p>
        </div>
      ))}
    </div>
  );
};
