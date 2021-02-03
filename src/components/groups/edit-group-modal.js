import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/forms/form';
import Input from '../shared/forms/input';
import Modal from '../shared/modal';

const EditGroupModal = ({ groupId }) => {
  return (
    <Modal isActive={!!groupId} title="Edit Group">
      <Form>
        <Input
          id="name"
          label="Name"
          // onChange={setEmail}
          placeholder="e.g. Home to Work"
        />
        <Input
          helpText='comma separated list. e.g. home to work, work, w = "home to work", "work", "w"'
          id="keywords"
          label="Keywords"
          // onChange={setEmail}
          placeholder="e.g. home to work, work, w"
        />

        {['', ''].map((s, index) => (
          <Fragment>
            <hr className="mt-0" />
            <h3 class="subtitle mt-2">Route {index + 1}</h3>
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <Input
                  id="route"
                  label="Route"
                  // onChange={setEmail}
                  placeholder="e.g. 18"
                  helpText="18"
                />
              </div>
              <div className="control">
                <Input
                  id="direction"
                  label="Direction"
                  // onChange={setEmail}
                  placeholder="e.g. southbound"
                  helpText="SOUTHBOUND"
                />
              </div>
              <div className="control">
                <Input
                  id="stop"
                  label="Stop"
                  // onChange={setEmail}
                  placeholder="e.g. 46th and Grand"
                  helpText="46th and Grand"
                />
              </div>
            </div>
          </Fragment>
        ))}
      </Form>
    </Modal>
  );
};

EditGroupModal.propTypes = {
  groupId: PropTypes.string,
};

export default EditGroupModal;
