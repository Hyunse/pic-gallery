import React, { Component } from 'react';
import Search from './Search';
import Gallery from './Gallery';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Search />
        <Gallery />
      </div>
    );
  }
}

export default Home;