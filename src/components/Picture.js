import React, { Component } from 'react';
import ImageButtons from './ImageButtons';
import '../css/Picture.css';

class Picture extends Component {
  constructor({ props }) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onMouseOver = () => {
    this.setState({ hover: true });
  }

  onMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div className="picture">
        <a
          href="#none"
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
        >
          <img
            className="unsplash-img"
            src={this.props.src}
            alt=""
            key={this.props.key}
          />
          <ImageButtons user={this.props.user} onMouseOver={this.state.hover}/>
        </a>
      </div>
    );
  }
}

export default Picture;
