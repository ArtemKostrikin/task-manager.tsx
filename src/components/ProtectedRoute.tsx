// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = true; // Установите в true для тестирования доступа к Profile

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
