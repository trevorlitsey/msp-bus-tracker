import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, label, onChange, placeholder, type }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="control">
        <input
          id={id}
          className="input"
          onChange={handleChange}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Input;
