import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (user.email) {
    return children;
  } else {
    console.log("first");
    return <Navigate to="/login" />;
  }
}
