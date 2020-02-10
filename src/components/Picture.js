import React, { Component } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    let unsplash = new Unsplash({
      accessKey: process.env.UNSPLASH_ACCESS_KEY,
      secret: process.env.UNSPLASH_SCREAT_KEY,
      callbackUrl: process.env.UNSPLASH_CALL_BACK_URL
    });

    unsplash.search
      .photos('dogs', 1, 5, { orientation: 'portrait' })
      .then(toJson)
      .then((json) => {
        this.setState({ images: json.results });
      });
  }

  render() {
    return (
      <div>
        {this.state.images.map((img, i) => {
          return <img src={img.urls.regular} alt={img} key={i} />;
        })}
      </div>
    );
  }
}

export default Picture;
