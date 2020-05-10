import React from 'react';
import TweetView from './TweetView';

const TweetList = props => {
  const tweets = () => {
    return props.tweets;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {tweets.map(tweet =>
        <TweetView
          key={tweet.id}
          name={tweet.user.screen_name}
          profilePic={tweet.user.profile_image_url}
          createdDate={tweet.created_at}
          text={tweet.text} />
      )}
    </div>
  );
};

export default TweetList;
