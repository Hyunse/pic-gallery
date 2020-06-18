import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Picture from './Picture';
import ImageModal from './ImageModal';
import '../css/Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      modalShow: false,
      modalSrc: '',
      modalUser: null,
      modalImg: null,
    };
  }

  componentDidMount() {
    this.searchUnsplashAPI(this.props.keyword);
  }

  componentWillReceiveProps({ keyword }) {
    this.searchUnsplashAPI(keyword);
  }

  searchUnsplashAPI(keyword) {
    let unsplash = new Unsplash({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      secret: process.env.REACT_APP_UNSPLASH_SCREAT_KEY,
      // callbackUrl: process.env.REACT_APP_UNSPLASH_CALL_BACK_URL_DEV
      callbackUrl: process.env.REACT_APP_UNSPLASH_CALL_BACK_URL_PRD,
    });

    unsplash.search
      .photos(keyword, 1, 9)
      .then(toJson)
      .then((json) => {
        if (json.results) {
          let imgArray = this.chunkArray(json.results, 3);
          this.setState({ images: imgArray });
        }
      });
  }

  chunkArray = (myArray, chunk_size) => {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  };

  onClickPic = (src, user, img) => {
    this.setState({
      modalSrc: src.small,
      modalUser: user,
      modalShow: true,
      modalImg: img,
    });

    document.body.classList.add('body-modal-open');
  };

  onClickCloseModal = () => {
    this.setState({ modalShow: false });
    document.body.classList.remove('body-modal-open');
  };

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
                        img={img}
                        src={img.urls}
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
          modalImg={this.state.modalImg}
          onClickCloseModal={this.onClickCloseModal}
        />
      </div>
    );
  }
}

export default Gallery;
