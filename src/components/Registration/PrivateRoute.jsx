import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated, redirectTo = '/login', ...props }) => {
  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
