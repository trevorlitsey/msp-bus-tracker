import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-start">
        <Link class="navbar-item" to="/tracker">
          Home
        </Link>
        <Link class="navbar-item" to="/tracker">
          Tracker
        </Link>
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Link class="button is-primary" to="/signup">
              <strong>Sign up</strong>
            </Link>
            <Link class="button is-light" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
