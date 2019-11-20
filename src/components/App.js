import React, { Component } from "react";
import RouteSelect from "./route-select";
import DirectionSelect from "./direction-select";
import StopSelect from "./stop-select";
import DeparturesList from "./departures-list";
import "./style.scss";

class App extends Component {
  render() {
    const { direction, route, stop } = this.props;

    return (
      <div className="app-container">
        <RouteSelect route={route} />
        <DirectionSelect key={route} direction={direction} route={route} />
        <StopSelect
          key={route + direction}
          route={route}
          direction={direction}
          stop={stop}
        />
        <DeparturesList
          key={route + direction + stop}
          route={route}
          direction={direction}
          stop={stop}
        />
      </div>
    );
  }
}

export default App;
