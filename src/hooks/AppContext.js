import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [provider, setProvider] = useState(/* initial provider value */);

  return (
    <AppContext.Provider value={{ provider, setProvider }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
