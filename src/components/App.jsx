// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Phonebook from './PhoneBook/Phonebook';
import Register from './Registration/Registration';
import Login from './Registration/Login';
import Navigation from './Navigation';
import Home from './PhoneBook/Refactor/home';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, redirectTo }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <>{element}</>
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'linear-gradient(90deg, #3498db, #85bdc1)' }}>
      <Navigation />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<PrivateRoute element={<Phonebook />} redirectTo="/login" />} />
          <Route path="*" element={<Navigate to={isAuthenticated ? '/contacts' : '/'} />} />
        </Routes>
      </div>
    </div>
  );
};
