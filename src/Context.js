//Theme Data
//User auth
//Location

//Prop drivig

//Steps :
//1: create a context using createContex
//2. Wrap around Component Tree
//3. Place the value that is suppossed to be passed down.
//4. Read the value of the context.
import React, {createContext, useState, useEffect, useContext} from react

const Theme = createContext( )

export const Provider = ({children}) => {const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    
    useEffect(()=>{
        localStorage.setItem ("theme", theme);
        
        //when the component is being mounted
        //weather thier is change in value
    }, [theme]);

    const values = { theme, setTheme };
    return < Theme.Provider value={values}>{children}</Theme.Provider>;
};
  export const useTheme = () => useContext (Theme);