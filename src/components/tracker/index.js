import React, { Component } from 'react';
import RouteSelect from './route-select';
import DirectionSelect from './direction-select';
import StopSelect from './stop-select';
import DeparturesList from './departures-list';
import Layout from '../layout';

class App extends Component {
  render() {
    const { direction, route, stop } = this.props;

    return (
      <Layout>
        <RouteSelect route={route} />
        <DirectionSelect key={route} direction={direction} route={route} />
        <StopSelect
          key={route && direction && route + direction}
          route={route}
          direction={direction}
          stop={stop}
        />
        <DeparturesList
          key={route && direction && stop && route + direction + stop}
          route={route}
          direction={direction}
          stop={stop}
        />
      </Layout>
    );
  }
}

export default App;
