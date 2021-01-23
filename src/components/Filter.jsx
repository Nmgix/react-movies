import React from "react";

class Filter extends React.Component {
  state = {
    filtering: "",
  };

  handleChoose = (event) => {
    this.setState({ filtering: event.target.value });
    this.props.filterCheck(event.target.value);
  };

  render() {
    return (
      <div>
        <label>
          <input
            name="categories"
            type="radio"
            value="All"
            onChange={this.handleChoose}
          />
          <span>All</span>
        </label>
        <label>
          <input
            name="categories"
            type="radio"
            value="Movies"
            onChange={this.handleChoose}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            name="categories"
            type="radio"
            value="Series"
            onChange={this.handleChoose}
          />
          <span>Series</span>
        </label>
      </div>
    );
  }
}

export { Filter };
