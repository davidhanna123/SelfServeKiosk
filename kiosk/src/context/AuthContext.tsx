import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
interface AuthContextProps {
  isLoggedIn: boolean;
  username: string | null;
  points: number;
  login: (username: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  username: null,
  points: 0,
  login: () => {},
  logout: () => {},
});

// AuthProvider component wrapper
const API_BASE_URL = 'http://localhost:3001/auth';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [points, setPoints] = useState<number>(0);

  const getPoints = async (user: string) =>{
    try{
      const response = await axios.get(`${API_BASE_URL}/points/${user}`);
      if (response.status === 200){
        console.log('points found',response.data.points);
        setPoints(response.data.points);
      }
    }catch(error){
      console.error('Error fetching points:', error);
    }
    

  };
  const login = (user: string) => {
    setIsLoggedIn(true);
    setUsername(user);
    getPoints(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername(null);
    setPoints(0);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, points, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
