// Import necessary modules and styles
import React from 'react';
import './App.css';


const user = {
  name: 'Franco and The Costellos',
  imageUrl: 'franko.png',
  imageSize: 90,
};

export default function Profile() {
  const handleFollowClick = () => {
    // Replace 'YOUR_SOUNDCLOUD_PROFILE_URL' with the actual URL of your SoundCloud profile
    const soundcloudProfileUrl = 'https://soundcloud.com/franco-and-the-costellos';

    // Open the SoundCloud profile in a new tab/window
    window.open(soundcloudProfileUrl, '_blank');
  };

  const handleFollowClick2 = () => {
    const twitterProfileUrl = 'https://twitter.com/AndtheCostellos'
    window.open(twitterProfileUrl, '_blank');
  }


    return (
      <div className="container">
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        
        <h1>{user.name}</h1>
        <button className="button" onClick={handleFollowClick}>
          Follow on SoundCloud

          Test
        </button>
        < button className = "button" onClick={handleFollowClick2}>
          Follow on Twitter
        </button>
      </div>
    );
  }

