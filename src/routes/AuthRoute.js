import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    if (!user) {
        return children;
    } else if (user) {
        return <Navigate to="/" replace />;
    }
};

export default ProtectedRoute;