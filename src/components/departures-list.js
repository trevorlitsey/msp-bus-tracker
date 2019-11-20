import React, { Component } from "react";
import { fetchDepartures } from "../services";

class DeparturesList extends Component {
  state = {
    departures: []
  };

  componentDidMount = async () => {
    const { route, direction, stop } = this.props;

    if (!route || !direction || !stop) {
      return;
    }

    try {
      const departures = await fetchDepartures(route, direction, stop);
      this.setState({ departures });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { departures } = this.state;

    if (departures.length) {
      return (
        <table className="table is-striped">
          <thead>
            <tr>
              <th>Route</th>
              <th></th>
              <th>Departs</th>
            </tr>
          </thead>
          <tbody>
            {departures.map((departure, index) => (
              <tr key={index}>
                <td>{departure.Route}</td>
                <td>{departure.Description}</td>
                <td className={departure.Actual ? "" : "has-text-danger"}>
                  {departure.DepartureText}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    return null;
  }
}

export default DeparturesList;
