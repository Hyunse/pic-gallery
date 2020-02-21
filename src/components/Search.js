import React, { Component } from 'react';
import '../css/Search.css';
import spaceImg from '../resource/space.jpg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="search-container">
        <img src={spaceImg} alt="search-back" />
      </div>
    );
  }
}

export default Search;