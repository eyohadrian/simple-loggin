import React, {createContext, useContext} from "react";

const ApiContext = createContext();

export const ApiContextProvider = ({children}) => {
  const endpoint = process.env.NODE_ENV === "production" ? process.env.REACT_APP_PRODUCTION_ENDPOINT : process.env.REACT_APP_ENV_ENDPOINT

  return (
      <ApiContext.Provider value={endpoint}>
        {children}
      </ApiContext.Provider>
  )
};

export const useApiContext = () => useContext(ApiContext);