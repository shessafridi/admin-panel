import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { FormEvent, useCallback, useState } from 'react';
import { useLogin } from 'react-admin';
import theme from '../theme/theme';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

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
    backgroundImage: `url('${
      process.env.PUBLIC_URL + '/images/login-min.jpg'
    }')`,
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
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [error, setError] = useState(false);
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
  const togglePassword = useCallback(() => {
    setHiddenPassword(!hiddenPassword);
  }, [hiddenPassword]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <ThemeProvider theme={theme}>
      <section
        className={!isSmall ? classes.root : `${classes.root} ${classes.small}`}
      >
        <form onSubmit={e => handleSubmit(e)} className={classes.form}>
          <Typography style={{ marginBottom: '25px' }} variant='h6'>
            Welcome to the Admin Panel
          </Typography>
          <TextField
            fullWidth
            onChange={e => setUsername(e.target.value)}
            label='Enter your email'
            type='email'
            variant='outlined'
          />
          <TextField
            fullWidth
            onChange={e => setPassword(e.target.value)}
            label='Enter your password'
            type={hiddenPassword ? 'password' : 'text'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {hiddenPassword ? (
                    <VisibilityOffIcon onClick={togglePassword} />
                  ) : (
                    <VisibilityIcon onClick={togglePassword} />
                  )}
                </InputAdornment>
              ),
            }}
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
        {!isSmall && (
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className='img-container'
          >
            <img width={300} src='images/logo-big.png' alt='' />
          </div>
        )}
      </section>
    </ThemeProvider>
  );
};

export default LoginPage;
