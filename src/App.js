import React, { Component } from 'react';

// Components
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCF-2OZnyKEundx-P1V8KnSvMM5aVLz4XU';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar className="input-group" />
      </div>
    );
  }
}

export default App;
