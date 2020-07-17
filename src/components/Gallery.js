import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Picture from './Picture';
import ImageModal from './ImageModal';
import '../css/Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      perPage: 9,
      images: [],
      modalShow: false,
      modalSrc: '',
      modalUser: null,
      modalImg: null,
    };
  }

  componentDidMount() {
    this.searchUnsplashAPI(
      this.props.keyword,
      this.state.page,
      this.state.perPage
    );
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentDidUpdate({ keyword }) {
    if (keyword !== this.props.keyword) {
      this.initState();
      this.searchUnsplashAPI(
        this.props.keyword,
        this.state.page,
        this.state.perPage
      );
    }
  }

  initState() {
    this.setState({ page: 1, perPage: 9, images: [] });
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - 3) {
      this.setState({ page: this.state.page + 1 });
      this.searchUnsplashAPI(
        this.props.keyword,
        this.state.page,
        this.state.perPage
      );
    } else {
    }
  }

  searchUnsplashAPI(keyword, page, perPage) {
    let unsplash = new Unsplash({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
      secret: process.env.REACT_APP_UNSPLASH_SCREAT_KEY,
      callbackUrl: process.env.REACT_APP_UNSPLASH_CALL_BACK_URL,
    });

    unsplash.search
      .photos(keyword, page, perPage)
      .then(toJson)
      .then((json) => {
        if (json.results) {
          let searchImgArray = this.chunkArray(json.results, 3);

          if (this.state.images.length > 0) {
            searchImgArray = this.state.images.map((imgArr, index) => {
              return [...imgArr, ...searchImgArray[index]];
            });
            this.setState({ images: searchImgArray });
          } else {
            this.setState({ images: searchImgArray });
          }

          console.log(searchImgArray);
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

  onClickPic = (src, user, img, download, link) => {
    this.setState({
      modalSrc: src.small,
      modalUser: user,
      modalShow: true,
      modalImg: img,
      modalDownload: download,
      modalDownloadlink: link
    });

    document.body.classList.add('body-modal-open');
  };

  onClickCloseModal = () => {
    this.setState({ modalShow: false });
    document.body.classList.remove('body-modal-open');
  };

  download = (link) => {
    window.open(link, '_blank');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.images.map((imgArr, index) => {
              return (
                <div className="column" key={index}>
                  {imgArr.map((img, i) => {
                    return (
                      <Picture
                        img={img}
                        src={img.urls}
                        link={img.links.download}
                        download={this.download}
                        user={img.user}
                        key={img.id}
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
          modalDownloadlink={this.state.modalDownloadlink}
          modalImg={this.state.modalImg}
          modalDownload={this.state.modalDownload}
          onClickCloseModal={this.onClickCloseModal}
        />
      </div>
    );
  }
}

export default Gallery;
