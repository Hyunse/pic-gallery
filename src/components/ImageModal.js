import React, { Component } from 'react';
import '../css/ImageModal.css';

class ImageModal extends Component {
  constructor({ props }) {
    super(props);

    this.state = {
      isSmall: true,
      imgHover: false
    };
  }

  componentDidMount() {}

  changeModalImg = () => {
    if (this.state.isSmall === true) {
      this.setState({ isSmall: false });
    } else {
      this.setState({ isSmall: true });
    }
  };

  onMouseOverImg = () => {
    this.setState({ imgHover: true });
  };

  onMouseLeaveImg = () => {
    this.setState({ imgHover: false });
  };

  render() {
    return (
      <div
        className={`image-modal-portal ${
          this.props.modalShow === false ? 'hidden' : 'visible'
        }`}
      >
        <div className="image-modal-close">
          <button
            className="fas fa-times"
            onClick={this.props.onClickCloseModal}
          ></button>
        </div>
        <div className="image-modal">
          <div>
            <div className="image-modal-header">
              <span className="image-buttons-profile">
                <div>
                  <img
                    src={
                      this.props.modalUser === null
                        ? ''
                        : this.props.modalUser.profile_image.large
                    }
                    alt={
                      this.props.modalUser === null
                        ? ''
                        : this.props.modalUser.username
                    }
                  />
                </div>
                <div
                  className="image-buttons-profile-username"
                  style={{ color: 'black' }}
                >
                  {this.props.modalUser === null
                    ? ''
                    : this.props.modalUser.username}
                </div>
              </span>
              <div
                className="image-buttons image-buttons-top"
                style={{ position:'relative', display: 'inline-flex', top: 'initial' }}
              >
                <button className="fas fa-heart"></button>
                <button className="fas fa-plus"> Collect</button>
                <button className="fas fa-download"> Download</button>
              </div>
            </div>
            <div className="image-modal-body">
              <div>
                <a
                  href="#none"
                  onClick={this.changeModalImg}
                  onMouseOver={this.onMouseOverImg}
                  onMouseLeave={this.onMouseLeaveImg}
                >
                  <i
                    className={`fas fa-expand ${
                      this.state.imgHover === false ? 'hidden' : 'visible'
                    }`}
                  ></i>
                  <img
                    src={
                      this.state.isSmall === true
                        ? this.props.modalSrc
                        : this.props.modalImg.urls.regular
                    }
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageModal;
