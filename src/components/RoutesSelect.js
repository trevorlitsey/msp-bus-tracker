import React from 'react';

const RoutesSelect = ({ routes }) => (
  <div className="select">
    <select>
      {routes.map(route => {
        return (
          <option value={route.Route} key={route.Route}>
            {route.Description}
          </option>
        );
      })}
    </select>
  </div>
);

export default RoutesSelect;
