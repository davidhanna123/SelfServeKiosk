import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  username: null,
  login: () => {},
  logout: () => {},
});

// AuthProvider component wrapper
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const login = (user: string) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
