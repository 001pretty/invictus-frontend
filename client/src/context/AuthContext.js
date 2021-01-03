import React, { useState, createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        auth: [isAuth, setIsAuth],
        token: [token, setToken],
        userId: [userId, setUserId],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
