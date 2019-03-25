/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ForgotPasswordPage from '../ForgotPasswordPage';

import GlobalStyle from '../../global-styles';
import definePrototype from './definePrototype';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../../scss/style.scss';
import { ROUTER } from '../../utils/constants';
import RegisterPage from '../RegisterPage';

definePrototype();

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTER.HOME} component={HomePage} />
        <Route exact path={ROUTER.LOGIN} component={LoginPage} />
        <Route
          exact
          path={ROUTER.FORGOT_PASSWORD}
          component={ForgotPasswordPage}
        />
        <Route exact path={ROUTER.REGISTER} component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
