import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCF-2OZnyKEundx-P1V8KnSvMM5aVLz4XU';

class App extends Component {
  constructor() {
    super();
    YTSearch({ key: API_KEY, term: 'justice' }, (videos) => {
      this.setState({ videos })
    });
  }
  state = {
    videos: []
  }

  render() {
    return (
      <div>
        <SearchBar className="input-group" />
      </div>
    );
  }
}

export default App;
