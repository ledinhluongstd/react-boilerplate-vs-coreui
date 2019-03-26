import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  Login: {
    id: `${scope}.header`,
    defaultMessage: 'Login',
  },
  sign_in_to_your_account: {
    id: `${scope}.header`,
    defaultMessage: 'Sign In to your account',
  },
  forgot_password: {
    id: `${scope}.header`,
    defaultMessage: 'Forgot password?',
  },
  username: {
    id: `${scope}.header`,
    defaultMessage: 'Username',
  },
  password: {
    id: `${scope}.header`,
    defaultMessage: 'Password',
  },
});
