import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import Picture from './Picture';
import '../css/Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unsplash: '',
      images: []
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

        console.log(imgArray);
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

  // getColumn() {
  //   this.state.images.map((imgArr, i) => {
  //     return <div className="column">{this.getPicture(imgArr)}</div>;
  //   });
  // }

  // getPicture(imgArr) {
  //   console.log('imgArr', imgArr);
  //   imgArr.map((img, i) => {
  //     return <Picture src={img.urls.small} key={i} />;
  //   });
  // }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.images.map((imgArr, key) => {
              return (
                <div className="column" key={key}>
                  {imgArr.map((img, i) => {
                    return <Picture src={img.urls.regular} key={i} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
