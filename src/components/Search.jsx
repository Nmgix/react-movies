import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleSearch = (event) => {
    if (event.key === "Enter") {
      this.props.movieSearch(this.state.search);
    }
  };

  render() {
    return (
      <div>
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleSearch}
            />
            <button
              className="btn grey darken-1 search-btn"
              onClick={() => this.props.movieSearch(this.state.search)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
