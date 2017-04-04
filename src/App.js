import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
// css
import './css/App.css';
// Components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCF-2OZnyKEundx-P1V8KnSvMM5aVLz4XU';

class App extends Component {
  constructor() {
    super();
    this.videoSearch('Justice');
  }
  state = {
    videos: [],
    selectedVideo: null
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] })
    });
  }


  render() {
    return (
      <div>
        <SearchBar 
          className="input-group"
          onSearch={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoClick={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;
