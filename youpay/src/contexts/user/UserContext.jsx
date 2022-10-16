import React, { createContext, useContext, useReducer } from 'react';
import { userReducer } from './reducer';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    userData: {},
    token: '',
    isUserAuthenticated: false,
  });
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
