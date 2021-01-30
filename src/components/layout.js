import React from 'react';
import Nav from './nav';
import './style.css';

const Layout = ({ children }) => (
  <>
    <Nav />
    <div className="app-container">{children}</div>
  </>
);

export default Layout;
