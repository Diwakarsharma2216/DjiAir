import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const baseURL = "http://192.168.118.120:4000"
    const [pre_cart, setPreCart] = useState([])

    const addToCart = (productID) => {
        setPreCart((prevCart) => [...prevCart, productID])
    }
    return (
        <UserContext.Provider value={{ pre_cart, addToCart }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;


