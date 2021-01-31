import React from 'react';

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="label">{label}</label>
    <div className="select">
      <select {...props}>
        {[{ label: '–' }, ...options].map(option => (
          <option value={option.value} key={option.value || option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default Select;
