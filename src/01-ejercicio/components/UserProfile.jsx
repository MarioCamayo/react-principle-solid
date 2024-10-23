import React from 'react';
import { useUserFetcher } from './useUserFetcher';
import { transformUserData } from './transformUserData';

export const UserProfile = () => {
  const { user, loading, error } = useUserFetcher(); // Ahora el hook usa async/await
  const transformedUser = transformUserData(user);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!transformedUser) return <p>No user data available</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {transformedUser.fullName}</p>
      <p>Email: {transformedUser.email}</p>
      <p>Address: {transformedUser.transformedAddress}</p>
    </div>
  );
};
