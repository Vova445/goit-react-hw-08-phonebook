import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './Registration/UserMenu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav>
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '16px', backgroundColor: '#3498db', color: '#fff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', fontWeight: 600, fontSize: '28px' }}>
          <Typography variant="h2" component={Link} to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#fff' }}>
            Phonebook
          </Typography>
          <div style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '16px' }}>
            <Button component={Link} to="/" style={{ color: '#fff', fontSize: '24px', fontWeight: 500, transition: 'color 0.3s ease-in-out', '&:hover': { color: '#FFC107' } }}>
              Home
            </Button>
            <Button component={Link} to="/register" style={{ color: '#fff', fontSize: '24px', fontWeight: 500, transition: 'color 0.3s ease-in-out', '&:hover': { color: '#FFC107' } }}>
              Register
            </Button>
            <Button component={Link} to="/login" style={{ color: '#fff', fontSize: '24px', fontWeight: 500, transition: 'color 0.3s ease-in-out', '&:hover': { color: '#FFC107' } }}>
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
