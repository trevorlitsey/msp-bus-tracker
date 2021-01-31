import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../forms/form';
import Input from '../forms/input';
import Layout from '../layout';
import { removeAuthToken, setAuthToken } from '../../utils/auth';
import { navigate } from 'gatsby';

const AuthForm = ({ defaultErrorMessage, onSubmit, title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const { jwt } = await onSubmit(email, password);
      setAuthToken(jwt);
      navigate('/tracker');
    } catch (e) {
      removeAuthToken();

      const errorMessage = setError(
        (e.responseJSON && e.responseJSON.message) || defaultErrorMessage
      );
    }
  };

  return (
    <Layout>
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <h1 className="is-size-2 mt-6">{title}</h1>
          <div className="box mt-2">
            {error && <div className="notification is-danger">{error}</div>}
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
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </Form>
          </div>
        </div>
        <div className="column"></div>
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
