import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { FormEvent, useState } from 'react';
import { useLogin } from 'react-admin';

interface LoginPageProps {}

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
    backgroundImage:
      "url('https://api.nisafoundation.org/appassets/51cfef8f-80cd-45b7-9a2c-f4e2e256fa02.jpg')",
  },
  label: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '8px',
  },
  form: {
    width: '500px',
    background: '#fefefe',
    display: 'block',
    padding: '50px',
    '& div': {
      marginBottom: '10px',
    },
  },
});

const LoginPage: React.FC<LoginPageProps> = props => {
  const classes = useStyles();
  const login = useLogin();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username, password);
    if (username.trim().length > 4 && password.trim().length > 5) {
      try {
        setLoading(true);
        await login({ username, password }, '');
      } catch {
        setError(true);
        setLoading(false);
      }
    }
  };

  return (
    <section className={classes.root}>
      <form onSubmit={e => handleSubmit(e)} className={classes.form}>
        <Typography style={{ marginBottom: '25px' }} variant='h6'>
          Welcome to the Admin Panel
        </Typography>
        <TextField
          error={error}
          fullWidth={true}
          onChange={e => setUsername(e.target.value)}
          label='Enter your email'
          type='email'
          variant='outlined'
        />
        <TextField
          fullWidth={true}
          onChange={e => setPassword(e.target.value)}
          label='Enter your password'
          type='password'
          variant='outlined'
        />
        <Button
          disabled={loading}
          size='large'
          variant='contained'
          type='submit'
          color='primary'
        >
          Login
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
