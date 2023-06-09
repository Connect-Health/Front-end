import React, { createContext, useEffect, useState } from "react";

// Crie o contexto
export const AuthContext = createContext();

// Crie o provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, updateUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      updateUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    window.location.reload();
    updateUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};