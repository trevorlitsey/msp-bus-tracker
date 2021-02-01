import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Form from '../forms/form';
import Input from '../forms/input';
import { setAuthToken } from '../../utils/auth';
import { navigate } from 'gatsby';

const AuthForm = ({ defaultErrorMessage, onSubmit, title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { jwt } = await onSubmit(email, password);
      setAuthToken(jwt);
      navigate('/tracker');
    } catch (e) {
      const errorMessage =
        (e.responseJSON && e.responseJSON.message) || defaultErrorMessage;
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column">
        <h1 className="title mt-6">{title}</h1>
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
              <button
                className={classnames('button is-link', {
                  'is-loading': isSubmitting,
                })}
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
};

AuthForm.propTypes = {
  defaultErrorMessage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AuthForm;
