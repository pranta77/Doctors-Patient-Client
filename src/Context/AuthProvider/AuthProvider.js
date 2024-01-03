import React, { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";

export const AUthContext = createContext(null);

export default function AuthProvider({ children }) {
  const allContexts = useFirebase();
  return (
    <AUthContext.Provider value={allContexts}>{children}</AUthContext.Provider>
  );
}
