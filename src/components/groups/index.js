import React from 'react';
import Layout from '../layout';

const Groups = () => (
  <Layout>
    <div className="columns">
      <div className="column"></div>
      <div className="column">
        <h1 className="title mt-6">Groups</h1>
        <div className="mt-2">
          <table className="table is-hoverable is-fullwidth  is-striped">
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Keywords</th>
                <th className="is-invisible">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="is-vcentered">Foo</td>
                <td className="is-vcentered">bar, baz</td>
                <td className="has-text-right">
                  <button className="button is-link mb-0">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="is-vcentered">Bar</td>
                <td className="is-vcentered">bar, baz</td>
                <td className="has-text-right">
                  <button className="button is-link mb-0">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="column"></div>
    </div>
  </Layout>
);

export default Groups;
