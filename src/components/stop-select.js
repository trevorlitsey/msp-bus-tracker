import React, { Component } from "react";
import { navigate } from "gatsby";
import { fetchStops } from "../services";
import { getLabelValueFrom } from "../utils/utils";
import Select from "./select";

class StopSelect extends Component {
  state = {
    stops: []
  };

  componentDidMount = async () => {
    const { direction, route } = this.props;

    if (!direction || !route) {
      return;
    }

    try {
      const stops = await fetchStops(route, direction);
      this.setState({ stops });
    } catch (e) {
      console.error(e);
    }
  };

  handleOnChange = e => {
    const { direction, route } = this.props;

    const stop = e.target.value;
    navigate(`/${route}/${direction}/${stop}`);
  };

  render() {
    const { stops } = this.state;
    const { stop } = this.props;

    if (stops.length) {
      return (
        <Select
          label="Stop"
          options={[{ Text: "–" }, ...stops].map(
            getLabelValueFrom("Text", "Value")
          )}
          onChange={this.handleOnChange}
          value={stop}
        />
      );
    }

    return null;
  }
}

export default StopSelect;
