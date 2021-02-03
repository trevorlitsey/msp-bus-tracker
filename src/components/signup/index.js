import React from 'react';
import { createUser } from '../../services';
import AuthForm from '../shared/auth-form';
import Layout from '../shared/layout';

const SignupPage = () => (
  <Layout>
    <AuthForm
      defaultErrorMessage="Unable to create account"
      onSubmit={createUser}
      title="Sign up"
    />
  </Layout>
);

export default SignupPage;
