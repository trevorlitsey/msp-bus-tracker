import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { location } from '../../facades';

const NavItem = ({ children, className, to }) => {
  return (
    <Link
      className={classnames(className, {
        'has-text-weight-bold': location.pathname.startsWith(to),
      })}
      to={to}
    >
      {children}
    </Link>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavItem;
