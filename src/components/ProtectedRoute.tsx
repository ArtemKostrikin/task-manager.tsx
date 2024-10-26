// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = false; // Здесь вы должны добавить логику проверки аутентификации

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
