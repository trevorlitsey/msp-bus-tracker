import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
