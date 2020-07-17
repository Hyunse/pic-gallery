import React, { Component } from 'react';
import ImageButtons from './ImageButtons';
import '../css/Picture.css';

class Picture extends Component {
  constructor({ props }) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  submitInfo = () => {
    this.props.onClick(this.props.src, this.props.user, this.props.img, this.props.download, this.props.link);
  };

  onMouseOver = () => {
    this.setState({ hover: true });
  };

  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <div className="picture">
        <a
          href="#none"
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseLeave}
          onClick={this.submitInfo}
        >
          <img className="unsplash-img" src={this.props.src.regular} alt="" />
          <ImageButtons
            user={this.props.user}
            onMouseOver={this.state.hover}
            link={this.props.link}
            download={this.props.download}
          />
        </a>
      </div>
    );
  }
}

export default Picture;
