import React from "react";
import { useReducer, createContext } from "react";
import reducer from "./reducer";

const initialState = {
  user: null,
  loggedIn: false,
  accessToken: null,
};

export const StoreContext = createContext();

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default Store;
