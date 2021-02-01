import React, { Fragment } from 'react';
import { navigate } from 'gatsby';
import { getIsLoggedIn, removeAuthToken } from '../../utils';
import NavItem from './NavItem';

const Nav = () => {
  const handleLogout = () => {
    removeAuthToken();
    navigate('/login');
  };

  const isLoggedIn = getIsLoggedIn();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-start">
          <NavItem className="navbar-item" to="/tracker">
            Tracker
          </NavItem>
          {isLoggedIn && (
            <Fragment>
              <NavItem className="navbar-item" to="/groups">
                Groups
              </NavItem>
              <NavItem className="navbar-item" to="/account">
                Account
              </NavItem>
            </Fragment>
          )}
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {isLoggedIn ? (
                <button className="button is-danger" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Fragment>
                  <NavItem className="button is-info" to="/signup">
                    Sign up
                  </NavItem>
                  <NavItem className="button is-light" to="/login">
                    Log in
                  </NavItem>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
