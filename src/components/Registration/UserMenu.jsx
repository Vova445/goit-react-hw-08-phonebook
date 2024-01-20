import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, getCurrentUser } from '../../Redux/authSlice';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from "@mui/material/CircularProgress";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogout = async () => {
    await dispatch(logoutUser());
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: (theme) => theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#59b1c8',
        color: '#fff',
        borderRadius: 10,
        maxHeight: '100px',
        width: 300,
        position: 'fixed',
        right: 20,
        top: 20,
      }}
    >
      {loading ? (
        <CircularProgress style={{ color: '#fff' }} />
      ) : isAuthenticated ? (
        <>
          <Typography variant="h6" sx={{ marginBottom: (theme) => theme.spacing(2) }}>
            Welcome, {user?.name || 'User'}!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            sx={{
              marginTop: (theme) => theme.spacing(2),
              backgroundColor: '#3b52b2',
              color: '#fff',
              borderRadius: 20,
              '&:hover': {
                backgroundColor: '#2a3a8a',
              },
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <p style={{ color: '#fff' }}>User not logged in</p>
      )}
    </Paper>
  );
};

export default UserMenu;
