import React, { Component } from 'react';

class ImageModal extends Component {
  constructor({ props }) {
    super(props);
  }

  render() {
    return (
      <div
        className={`image-modal-portal ${
          this.props.modalShow === false ? 'hidden' : 'visible'
        }`}
      >
        <div className="image-modal">
          <div>
            <button onClick={this.props.onClickCloseModal}>x</button>
          </div>
          <div>
            <div>{this.props.modalUser === null ? '' : this.props.modalUser.username }</div>
            <div>
              <div>
                <img src={this.props.modalSrc} alt="" />
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
