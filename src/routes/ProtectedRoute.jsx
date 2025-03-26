import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const {authenticated} = useSelector(state=>state.auth)


    return authenticated ? <Outlet /> : <Navigate to="/login" replace />;

}

export default ProtectedRoute