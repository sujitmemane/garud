import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(localStorage.getItem("Auth_Token"));
  const [user, setUser] = useState();
  return (
    <AppContext.Provider value={{ isAuth, setAuth, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
