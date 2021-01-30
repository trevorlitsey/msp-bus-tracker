import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { fetchRoutes } from '../../services';
import { getLabelValueFrom } from '../../utils/utils';
import Select from './select';

class RoutesSelect extends Component {
  state = {
    routes: [],
  };

  componentDidMount = async () => {
    try {
      const routes = await fetchRoutes();
      this.setState({ routes });
    } catch (e) {
      console.log(e);
    }
  };

  handleOnChange = e => {
    const route = e.target.value;
    navigate(`/tracker/${route}`);
  };

  render() {
    const { routes } = this.state;
    const { route } = this.props;

    if (routes.length) {
      return (
        <Select
          label="Route"
          options={[{ Description: '–' }, ...routes].map(
            getLabelValueFrom('Description', 'Route')
          )}
          onChange={this.handleOnChange}
          value={route}
        />
      );
    }

    return null;
  }
}

export default RoutesSelect;
