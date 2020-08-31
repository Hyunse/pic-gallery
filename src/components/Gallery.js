import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Picture from './Picture';
import ImageModal from './ImageModal';
import ArrayUtils from '../utils/array';
import '../css/Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      perPage: 9,
      images: [],
      originalArray: [],
      modalShow: false,
      modalSrc: '',
      modalUser: null,
      modalImg: null,
      chunkSize: 3,
    };

    this.searchUnsplashAPI(
      this.props.keyword,
      this.state.page,
      this.state.perPage
    );
  }

  componentDidMount() {
    const debouncedFunction = this.debounce(this.resizeImgArray, 1000);

    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', debouncedFunction);
  }

  componentDidUpdate({ keyword }) {
    if (keyword !== this.props.keyword) {
      this.initState();
      this.searchUnsplashAPI(this.props.keyword, 1, 9);
    }
  }

  componentWillMount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.resizeImgArray);
  }

  /**
   * Init State for searching new keyword
   */
  initState() {
    this.setState({
      page: 1,
      perPage: 9,
      images: [],
      originalArray: [],
      chunkSize: 3,
    });
  }
  
  /**
   * Listen Scroll Event for lazyloading
   */
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

    if (windowBottom >= docHeight - 200) {
      this.setState({ page: this.state.page + 1 });
      this.searchUnsplashAPI(
        this.props.keyword,
        this.state.page,
        this.state.perPage
      );
    } else {
    }
  }

  /**
   * Search Image API
   * @param {string} keyword 
   * @param {numberf} page 
   * @param {number} perPage 
   */
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
          let chunkSize = this.getChunkSize();
          let copiedArray = ArrayUtils.copyArray(json.results);
          let images = ArrayUtils.copyArray(this.state.images);
          let searchImgArray = ArrayUtils.chunkArray(json.results, chunkSize);

          if (images.length > 0) {
            searchImgArray = images.map((imgArr, index) => {
              if (searchImgArray[index]) {
                return [...imgArr, ...searchImgArray[index]];
              }
              return [...imgArr];
            });
          }

          this.setState({
            images: searchImgArray,
          });

          this.setState(({ originalArray }) => {
            let result;

            if (originalArray.length < 1) {
              result = [...copiedArray];
            } else {
              result = [...originalArray, ...copiedArray];
            }
            return { originalArray: result };
          });
        }
      });
  }

  /**
   * Debounce Function
   */
  debounce = (func, wait) => {
    let timeout;

    return function excutedFunction(...args) {
      const later = () => {
        timeout = null;
        func(...args);
      };

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);
    };
  };

  /**
   * Resize Image Array
   */
  resizeImgArray = () => {
    let imgArray = ArrayUtils.copyArray(this.state.originalArray);
    let chunkSize = this.getChunkSize() * this.state.page;
    let resizeArray = ArrayUtils.chunkArray(imgArray, chunkSize);

    this.setState({
      images: resizeArray,
      chunkSize,
    });
  };

  /**
   * Get Chunk Size for Column
   */
  getChunkSize() {
    const width = window.innerWidth;
    let chunkSize;

    if (width > 700 && width < 950) {
      chunkSize = 5;
    } else if (width >= 950) {
      chunkSize = 3;
    } else {
      chunkSize = 9;
    }

    return chunkSize;
  }

  /**
   * Click Picture
   * @param {string} src 
   * @param {string} user 
   * @param {string} img 
   * @param {function} download 
   * @param {string} link 
   */
  onClickPic = (src, user, img, download, link) => {
    this.setState({
      modalSrc: src.small,
      modalUser: user,
      modalShow: true,
      modalImg: img,
      modalDownload: download,
      modalDownloadlink: link,
    });

    document.body.classList.add('body-modal-open');
  };

  /**
   * Close Modal
   */
  onClickCloseModal = () => {
    this.setState({ modalShow: false });
    document.body.classList.remove('body-modal-open');
  };

  download = (link) => {
    window.open(link, '_blank');
  };

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
                        key={`${img.id}` + i}
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
