import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Phonebook from './PhoneBook/Phonebook';
import Register from './Registration/Registration';
import Login from './Registration/Login';
import Navigation from './Navigation';
import Home from './PhoneBook/Refactor/home';

export const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'linear-gradient(90deg, #3498db, #85bdc1)' }}>
      <Navigation />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
