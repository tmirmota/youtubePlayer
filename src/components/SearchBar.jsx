import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input className="form-control" onChange={term => this.props.onSearch(term.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
