import React from 'react';
import '../css/ImageButtons.css';

const ImageButtons = ({ user, onMouseOver = false, link, download }) => {
  if (!user) {
    user = {
      profile_image: {
        large: '',
      },
      username: '',
    };
  }

  const clickDownload = (e) => {
    e.stopPropagation();
    download(link);
  };

  return (
    <div
      className={`image-buttons-container ${
        onMouseOver === false ? 'hidden' : 'visible'
      }`}
    >
      <div className="image-shadow"></div>
      <div className="image-buttons image-buttons-top">
        <button className="fas fa-heart"></button>
        <button className="fas fa-plus"> Collect</button>
      </div>
      <div className="image-buttons image-buttons-bottom">
        <span className="image-buttons-profile">
          <div>
            <img src={user.profile_image.large} alt={user.username} />
          </div>
          <div className="image-buttons-profile-username">{user.username}</div>
        </span>
        <button onClick={clickDownload} className="fas fa-arrow-down"></button>
      </div>
    </div>
  );
};

export default ImageButtons;
