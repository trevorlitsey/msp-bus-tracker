import React, { Component, Fragment } from 'react';
import { fetchDepartures } from '../../services';

const FETCH_INTERVAL = 30 * 1000;

const formatHours = hours => (hours > 12 ? hours - 12 : hours);
const formatMinutes = minutes => (minutes < 10 ? `0${minutes}` : minutes);
const formatSeconds = seconds => (seconds < 10 ? `0${seconds}` : seconds);

const LastFetched = ({ lastFetchedMillis, secondsTillNextFetch }) => {
  if (lastFetchedMillis) {
    const lastFetchedDateObj = new Date(lastFetchedMillis);
    const hours = lastFetchedDateObj.getHours();
    const minutes = lastFetchedDateObj.getMinutes();
    const seconds = lastFetchedDateObj.getSeconds();

    const formattedLastFetched = `${formatHours(hours)}:${formatMinutes(
      minutes
    )}`;

    return (
      <p>
        Last updated at {formattedLastFetched}
        {hours > 12 ? 'pm' : 'am'} and {formatSeconds(seconds)} seconds – Next
        automatic update in 0:
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
    secondsTillNextFetch: FETCH_INTERVAL / 1000,
  };

  componentDidMount = async () => {
    const { route, direction, stop } = this.props;

    if (route && direction && stop) {
      this.fetchDepartures();
      this.startPoll();
    }
  };

  componentDidUpdate = () => {
    const { route, direction, stop } = this.props;
    const { lastFetchedMillis } = this.state;
    if (
      lastFetchedMillis <= Date.now() - FETCH_INTERVAL &&
      route &&
      direction &&
      stop
    ) {
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
      this.setSecondsTillNextFetch();
    } catch (e) {
      console.error(e);
    }
  };

  setSecondsTillNextFetch = () => {
    const { lastFetchedMillis } = this.state;

    const secondsTillNextFetch = lastFetchedMillis
      ? Math.round((lastFetchedMillis + FETCH_INTERVAL - Date.now()) / 1000)
      : '';

    this.setState({
      secondsTillNextFetch: secondsTillNextFetch < 0 ? 0 : secondsTillNextFetch,
    });
  };

  startPoll = () => {
    this.pollId = setInterval(() => {
      this.setSecondsTillNextFetch();
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
          <button className="button is-info" onClick={this.fetchDepartures}>
            Update now
          </button>
          <table className="table is-striped">
            <thead>
              <tr>
                <th>Route</th>
                <th>Description</th>
                <th>Departs</th>
              </tr>
            </thead>
            <tbody>
              {departures.map((departure, index) => (
                <tr key={index}>
                  <td>{departure.route}</td>
                  <td>{departure.description}</td>
                  <td className={departure.actual ? '' : 'has-text-danger'}>
                    {departure.departureText}
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
