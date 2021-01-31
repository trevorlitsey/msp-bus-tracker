import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../forms/form';
import Input from '../forms/input';
import Layout from '../layout';
import { removeAuthToken, setAuthToken } from '../../utils/auth';

const AuthForm = ({ defaultErrorMessage, onSubmit, title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    try {
      const { jwt } = onSubmit(email, password);
      debugger;
      setAuthToken(jwt);
    } catch (e) {
      debugger;
      removeAuthToken();
      setError(e.responseJSON.error || defaultErrorMessage);
    }
  };

  return (
    <Layout>
      <div class="columns ">
        <div class="column"></div>
        <div class="column">
          <h1 className="is-size-2 mt-6">{title}</h1>
          <div class="box mt-2">
            {error && <div class="notification is-danger">{error}</div>}
            <Form onSubmit={handleSubmit}>
              <Input
                id="email"
                label="Email"
                onChange={setEmail}
                placeholder="e.g. alexsmith@gmail.com"
                type="email"
              />
              <Input
                id="password"
                label="Password"
                onChange={setPassword}
                placeholder="e.g. password123"
                type="password"
              />
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </Form>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </Layout>
  );
};

AuthForm.propTypes = {
  defaultErrorMessage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AuthForm;
