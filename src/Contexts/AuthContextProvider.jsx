
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true)
    const login = (newToken) => {
        setToken(newToken);
        setIsAuth(true);
        localStorage.setItem('USER_TOKEN', newToken);
    };

    useEffect(() => {
        // Check for token in local storage when the app initializes
        const storedToken = localStorage.getItem('USER_TOKEN');
        // console.log("token comming from authContext ", storedToken);
        if (storedToken) {
            setToken(storedToken);
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
        setLoading(false);
    }, []);



    const logout = () => {
        setToken(null);
        setIsAuth(false);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuth, token, login, logout, loading, }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
