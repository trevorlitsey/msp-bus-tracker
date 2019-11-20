import React, { Component } from "react";
import { navigate } from "gatsby";
import { fetchDirections } from "../services";
import { getLabelValueFrom } from "../utils/utils";
import Select from "./select";

class DirectionSelect extends Component {
  state = {
    directions: []
  };

  componentDidMount = async () => {
    const { route } = this.props;

    if (!route) {
      return;
    }

    try {
      const directions = await fetchDirections(route);
      this.setState({ directions });
    } catch (e) {
      console.error(e);
    }
  };

  handleOnChange = e => {
    const { route } = this.props;

    const direction = e.target.value;
    navigate(`/${route}/${direction}`);
  };

  render() {
    const { directions } = this.state;
    const { direction } = this.props;

    if (directions.length) {
      return (
        <Select
          label="Direction"
          options={[{ Text: "–" }, ...directions].map(
            getLabelValueFrom("Text", "Value")
          )}
          onChange={this.handleOnChange}
          value={direction}
        />
      );
    }

    return null;
  }
}

export default DirectionSelect;
