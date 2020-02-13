import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Picture from './Picture';
import ImageModal from './ImageModal';
import '../css/Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unsplash: '',
      images: [],
      modalShow: false,
      modalSrc: '',
      modalUser: null
    };
  }

  componentDidMount() {
    let unsplash = new Unsplash({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      secret: process.env.REACT_APP_UNSPLASH_SCREAT_KEY,
      callbackUrl: process.env.REACT_APP_UNSPLASH_CALL_BACK_URL
    });

    unsplash.search
      .photos('cats', 1, 9)
      .then(toJson)
      .then((json) => {
        let imgArray = this.chunkArray(json.results, 3);
        this.setState({ images: imgArray });
      });
  }

  chunkArray = (myArray, chunk_size) => {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  };

  onClickPic = (src, user) => {
    this.setState({ modalSrc: src, modalUser: user, modalShow: true });
  };

  onClickCloseModal = () => {
    this.setState({ modalShow: false});
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.images.map((imgArr, key) => {
              return (
                <div className="column" key={key}>
                  {imgArr.map((img, i) => {
                    return (
                      <Picture
                        src={img.urls.regular}
                        user={img.user}
                        key={i}
                        onClick={this.onClickPic}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <ImageModal
          modalShow={this.state.modalShow}
          modalUser={this.state.modalUser}
          modalSrc={this.state.modalSrc}
          onClickCloseModal={this.onClickCloseModal}
        />
      </div>
    );
  }
}

export default Gallery;
