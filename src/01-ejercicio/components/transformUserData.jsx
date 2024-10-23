export const transformUserData = (user) => {
    if (!user) return null;
  
    // Ejemplo de transformación de datos: Formatear dirección y nombre
    const transformedAddress = `${user.address.suite}, ${user.address.street}, ${user.address.city}`;
    const fullName = user.name.toUpperCase(); // Pasamos el nombre a mayúsculas
  
    return {
      ...user,
      fullName, // Nueva propiedad con el nombre en mayúsculas
      transformedAddress, // Nueva propiedad con la dirección formateada
    };
  };
  