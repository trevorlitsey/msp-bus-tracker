import React from 'react';
import { Link } from 'gatsby';
import { getIsLoggedIn } from '../utils';

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-start">
        <Link className="navbar-item" to="/tracker">
          Home
        </Link>
        <Link className="navbar-item" to="/tracker">
          Tracker
        </Link>
      </div>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {getIsLoggedIn() ? (
              <Link className="button is-danger" to="/logout">
                Logout
              </Link>
            ) : (
              <>
                <Link className="button is-primary" to="/signup">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light" to="/login">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
