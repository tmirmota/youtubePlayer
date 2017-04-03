import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCF-2OZnyKEundx-P1V8KnSvMM5aVLz4XU';

class App extends Component {
  constructor() {
    super();
    YTSearch({ key: API_KEY, term: 'justice' }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] })
    });
  }
  state = {
    videos: [],
    selectedVideo: null
  }


  render() {
    return (
      <div>
        <SearchBar className="input-group" />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoClick={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;
