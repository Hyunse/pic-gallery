import React, { Component } from 'react';
import Search from './Search';
import Gallery from './Gallery';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: 'puppy',
    };
  }

  onKeypress = (e) => {
    const keyword = e.target.value;

    if (e.key === 'Enter' && keyword !== this.state.keyword) {
      this.setState({ keyword });
    }
  };

  render() {
    return (
      <div>
        <Search onKeypress={this.onKeypress} />
        <Gallery keyword={this.state.keyword} />
      </div>
    );
  }
}

export default Home;
