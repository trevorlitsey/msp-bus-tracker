import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Nav from '../nav';
import '../../style.css';

const Layout = ({ children, className }) => (
  <Fragment>
    <Nav />
    <div className={classnames('app-container', className)}>{children}</div>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
