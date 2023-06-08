import React, { createContext, useState } from "react";

// Crie o contexto
export const AuthContext = createContext();

// Crie o provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Função para atualizar as informações do usuário logado
  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};