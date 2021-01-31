import React from 'react';
import { authenticateUser } from '../../services';
import AuthForm from '../auth-form';

const LoginPage = () => (
  <AuthForm
    defaultErrorMessage="Incorrect email and/or password"
    onSubmit={authenticateUser}
    title="Login"
  />
);

export default LoginPage;
