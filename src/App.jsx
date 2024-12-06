import React from 'react'
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './Routes/AllRoutes';
import UserContextProvider from './Contexts/UserContextProvider.jsx';
function App() {
  
  return (
    <>
      <BrowserRouter>
        
          <CSSReset />
          <UserContextProvider>
          <AllRoutes/>
          </UserContextProvider>
        
      </BrowserRouter>

    </>
  )
}

export default App
