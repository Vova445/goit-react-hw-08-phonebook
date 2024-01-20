import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ContactForm from './Refactor/ContactForm';
import Filter from './Refactor/Filter';
import ContactList from './Refactor/ContactList';
import { fetchContacts } from '../../Redux/contactSlice';

const styles = {
  container: {
    width: 1000,
    margin: '0 auto',
    marginTop: 50,
    marginBottom: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 3,
  },
  title: {
    marginBottom: 4,
    fontSize: 36,
  },
  message: {
    color: '#fff',
    backgroundColor: '#3498db',
    padding: 4,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 2,
    width: '100%',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiButtonRoot': { 
      marginLeft: 1,
      backgroundColor: '#1f9cb7',
      transition: 'color 0.3s ease-in-out',
      fontSize: '36px',
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: '#1b849a',
      },
    },
  },

  contactsSection: {
    marginTop: 60,
    backgroundColor: 'white',
    padding: 40,
    borderRadius: '15px',
  },
  loading: {
    marginBottom: 2,
    fontSize: 18,
    color: 'black',
  },
  error: {
    marginBottom: 2,
    fontSize: 18,
    color: 'red',
  },
  
  
};

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div style={styles.container}>
      {isAuthenticated ? (
        <>
         
          <ContactForm />
        </>
      ) : (
        <Paper style={styles.message}>
          <Typography variant="body1" style={{ fontSize: '36px', padding: 30 }}>
            Please{' '}
            <Button component={Link} to="/register" color="inherit" variant="contained" style={{background: '#289ed4', fontSize: '36px', borderRadius: 24} }>
              Register
            </Button>{' '}
            or{' '}
            <Button component={Link} to="/login" color="inherit" variant="contained" style={{background: '#289ed4', fontSize: '36px', borderRadius: 24}}>
              Log in
            </Button>{' '}
            to add a contact.
          </Typography>
        </Paper>
      )}

      {isAuthenticated && (
        <div style={styles.contactsSection}>
          <Typography variant="h2" style={{ margin: '40px 0', fontSize: '36px', fontWeight: 600, }}>
            Contacts
          </Typography>
          <Filter />
          {isLoading && <p style={styles.loading}>Loading...</p>}
          {error && <p style={styles.error}>Error: {error}</p>}
          <ContactList />
        </div>
      )}
    </div>
  );
};

export default Phonebook;
