import React, { createContext,useState } from 'react'

//createContext

export const AppContext = createContext()

const Context =({children}) => {


  let [darkTheme, setDarkTheme] = useState(true);

  return (
    <AppContext.Provider value={{darkTheme,setDarkTheme}}>
        {children}
    </AppContext.Provider>
  )
}

export default Context