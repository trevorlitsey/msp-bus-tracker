import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../forms/form';
import Input from '../forms/input';
import Layout from '../layout';
import { setAuthToken } from '../../utils/auth';

const AuthForm = ({ onSubmit, title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    try {
      const { jwt } = onSubmit(email, password);
      setAuthToken(jwt);
    } catch (e) {}
  };

  return (
    <Layout>
      <div class="columns ">
        <div class="column"></div>
        <div class="column">
          <h1 className="is-size-2 mt-6">{title}</h1>
          <div class="box mt-2">
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
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AuthForm;
