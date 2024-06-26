import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, updateUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      updateUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    
    updateUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};