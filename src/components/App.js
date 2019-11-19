import React, { Component } from 'react';
import RoutesSelect from './RoutesSelect';
import { fetchRoutes } from '../services';

class App extends Component {
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

  render() {
    const { routes } = this.state;
    const { route } = this.props;

    if (route) {
      return route;
    }

    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <RoutesSelect routes={routes} />
        </div>
      </div>
    );
  }
}

export default App;
