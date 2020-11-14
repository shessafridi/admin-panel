import {
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
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
  small: {
    justifyContent: 'center',
    alignItems: 'center',
    '& form': {
      marginTop: '-50px',
      height: '55vh',
      minHeight: '450px',
      borderRadius: '10px',
      '& div': {
        marginBottom: '20px',
      },
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
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
    <section
      className={!isSmall ? classes.root : `${classes.root} ${classes.small}`}
    >
      <form onSubmit={e => handleSubmit(e)} className={classes.form}>
        <Typography style={{ marginBottom: '25px' }} variant='h6'>
          Welcome to the Admin Panel
        </Typography>
        <TextField
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
        <Typography
          className={error ? '' : 'd-none'}
          style={{ color: '#f44336', marginBottom: '15px' }}
        >
          Invalid username or password.
        </Typography>
        <Button
          disabled={loading}
          size='large'
          fullWidth={isSmall}
          variant='contained'
          type='submit'
          color='primary'
        >
          <CircularProgress
            size={20}
            style={{ marginRight: '10px' }}
            color='inherit'
            className={loading ? '' : 'd-none'}
          />
          Login
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
