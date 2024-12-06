import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";
import LoadingSpinner from "../Components/LoadingSpinner";



const PrivateRoute = ({ children }) => {
    const { isAuth, loading } = useContext(AuthContext);
    if (loading) {
        return <LoadingSpinner />;
    } else {
        if (isAuth) {
            return children;
        } else {
            return <Navigate to="/login" />;
        }
    }

}

export default PrivateRoute
