import React, { useState } from 'react';
import Form from '../forms/form';
import Input from '../forms/input';
import Layout from '../layout';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // TODO
  };

  return (
    <Layout>
      <div class="columns ">
        <div class="column"></div>
        <div class="column">
          <div class="box mt-6">
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
                <button class="button is-primary">Submit</button>
              </div>
            </Form>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </Layout>
  );
};

export default LoginPage;
