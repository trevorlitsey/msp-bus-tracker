import React from 'react';
import { authenticateUser } from '../../services';
import AuthForm from '../shared/auth-form';
import Layout from '../shared/layout';

const LoginPage = () => (
  <Layout>
    <AuthForm
      defaultErrorMessage="Incorrect email and/or password"
      onSubmit={authenticateUser}
      title="Login"
    />
  </Layout>
);

export default LoginPage;
