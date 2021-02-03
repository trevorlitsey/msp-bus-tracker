import React, { Fragment, useEffect, useState } from 'react';
import { fetchGroups } from '../../services';
import Layout from '../shared/layout';
import EditGroupModal from './edit-group-modal';

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);
  const [groupToEdit, setGroupToEdit] = useState(null);

  const handleFetchGroups = async () => {
    try {
      const groups = await fetchGroups();
      setGroups(groups);
    } catch (e) {
      setError(e.message || 'unable to fetch groups');
    }
  };

  const handleGroupToEditClick = groupId => {
    setGroupToEdit(groupId);
  };

  useEffect(() => {
    handleFetchGroups();
  }, []);

  return (
    <Fragment>
      <EditGroupModal groupId={groupToEdit} />
      <Layout className="container is-centered">
        <h1 className="title">Groups</h1>
        <div className="mt-2">
          <table className="table is-hoverable is-fullwidth is-striped">
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Keywords</th>
                <th>Routes</th>
                <th className="is-invisible">Edit</th>
              </tr>
            </thead>
            <tbody>
              {groups.length === 0 ? (
                <tr>
                  <td>({error ? error : 'no groups yet'})</td>
                </tr>
              ) : (
                groups.map(group => (
                  <tr>
                    <td className="is-vcentered">{group.name}</td>
                    <td className="is-vcentered">
                      {group.keywords && group.keywords.length
                        ? group.keywords
                            .map(keyword => `"${keyword}"`)
                            .join(', ')
                        : '(none)'}
                    </td>
                    <td className="is-vcentered">
                      {group.routes && group.routes.length
                        ? group.routes
                            .map(
                              route =>
                                `${route.route.label} / ${route.direction.label} / ${route.stop.label}`
                            )
                            .join('\n')
                        : '(none)'}
                    </td>
                    <td className="has-text-right">
                      <button
                        className="button is-link mb-0"
                        onClick={handleGroupToEditClick}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Groups;
