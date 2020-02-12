import React from 'react';
import '../css/Picture.css';

const Picture = ({ src, key }) => {
  return (
  <React.Fragment>
    <img className="unsplash-img" src={src} alt="" key={key}/>
    <i className="fas fa-arrow-down"></i>
  </React.Fragment>
  );
};

export default Picture;
