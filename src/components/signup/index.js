import React from 'react';
import { createUser } from '../../services';
import AuthForm from '../auth-form';
import Layout from '../layout';

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
