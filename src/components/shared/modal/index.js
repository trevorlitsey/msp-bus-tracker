import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Modal = ({ children, isActive, title }) => (
  <div className={classnames('modal', { 'is-active': isActive })}>
    <div className="modal-background" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{title}</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">{children}</section>
      <footer class="modal-card-foot">
        <button class="button is-link">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  title: PropTypes.string,
};

export default Modal;
