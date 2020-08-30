import React, { Component } from 'react';
import '../css/Search.css';
// import spaceImg from '../resource/space.jpg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-container">
        {/* <img src={spaceImg} alt="search-back" /> */}
        <div className="search-bar-area">
          <div className="title">
            <span>Picture Gallery</span>
          </div>
          <div className="search-bar-input-box">
            <input
              type="text"
              className="search-bar search-bar-text"
              placeholder="Search Images"
              onKeyUp={this.props.onKeypress}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
