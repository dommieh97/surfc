import { LayoutGroup } from "framer-motion";
import React, {createContext} from "react";
import RootLayout from "./layout";
const Context = createContext();

const ContextProvider = () => {
const [isLoggedIn, setIsLoggedin] = React.useState(false);
      
        return (
          <Context.Provider value={{ isLoggedIn, setIsLoggedin }}>
            <RootLayout />
          </Context.Provider>
        );
      };
export default Context;