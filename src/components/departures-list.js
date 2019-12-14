import React, { Component, Fragment } from 'react';
import { fetchDepartures } from '../services';

const FETCH_INTERVAL = 30 * 1000;

const formatHours = hours => (hours > 12 ? hours - 12 : hours);
const formatMinutes = minutes => (minutes < 10 ? `0${minutes}` : minutes);

const LastFetched = ({ lastFetchedMillis, secondsTillNextFetch }) => {
  if (lastFetchedMillis) {
    const lastFetchedDateObj = new Date(lastFetchedMillis);
    const hours = lastFetchedDateObj.getHours();
    const minutes = lastFetchedDateObj.getMinutes();

    const formattedLastFetched = `${formatHours(hours)}:${formatMinutes(
      minutes
    )}`;

    return (
      <p>
        Last updated at {formattedLastFetched}
        {hours > 12 ? 'pm' : 'am'} – Next update in 0:
        {secondsTillNextFetch === '??' || secondsTillNextFetch > 9
          ? secondsTillNextFetch
          : '0' + secondsTillNextFetch}
      </p>
    );
  }

  return null;
};

class DeparturesList extends Component {
  state = {
    departures: [],
    lastFetchedMillis: null,
    secondsTillNextFetch: '??',
  };

  componentDidMount = async () => {
    const { route, direction, stop } = this.props;

    if (!route || !direction || !stop) {
      return;
    }

    this.fetchDepartures();
    this.startPoll();
  };

  componentDidUpdate = () => {
    const { lastFetchedMillis } = this.state;
    if (lastFetchedMillis <= Date.now() - FETCH_INTERVAL) {
      this.fetchDepartures();
    }
  };

  componentWillUnmount = () => {
    this.stopPoll();
  };

  fetchDepartures = async () => {
    const { route, direction, stop } = this.props;

    try {
      const departures = await fetchDepartures(route, direction, stop);
      this.setState({ departures, lastFetchedMillis: Date.now() });
    } catch (e) {
      console.error(e);
    }
  };

  startPoll = () => {
    this.pollId = setInterval(() => {
      const { lastFetchedMillis } = this.state;

      this.setState({
        secondsTillNextFetch: lastFetchedMillis
          ? Math.ceil((lastFetchedMillis + FETCH_INTERVAL - Date.now()) / 1000)
          : '',
      });
    }, 1000);
  };

  stopPoll = () => {
    clearInterval(this.pollId);
  };

  render() {
    const { departures, lastFetchedMillis, secondsTillNextFetch } = this.state;

    if (departures.length) {
      return (
        <Fragment>
          <LastFetched
            lastFetchedMillis={lastFetchedMillis}
            secondsTillNextFetch={secondsTillNextFetch}
          />
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
                  <td className={departure.Actual ? '' : 'has-text-danger'}>
                    {departure.DepartureText}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      );
    }

    return null;
  }
}

export default DeparturesList;
