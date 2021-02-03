import React, { Component } from 'react';
import Layout from '../shared/layout';
import RouteSelect from './route-select';
import DirectionSelect from './direction-select';
import StopSelect from './stop-select';
import DeparturesList from './departures-list';

class App extends Component {
  render() {
    const { direction, route, stop } = this.props;

    return (
      <Layout>
        <h1 className="title">Tracker</h1>
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
