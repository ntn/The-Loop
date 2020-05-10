import React, { useEffect, useState } from 'react';
import TweetView from './TweetView';
import twitterService from '../services/twitter';

const TweetList = props => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    twitterService.getTweetsByTag(props.tagName).then((retrievedTweets) => {
      setTweets(retrievedTweets);
    });
  }, [props.tagName]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {tweets.map(tweet =>
        <TweetView
          key={tweet.id}
          id={tweet.id_str}
          name={tweet.user.screen_name}
          profilePic={tweet.user.profile_image_url}
          createdDate={tweet.created_at}
          text={tweet.text} />
      )}
    </div>
  );
};

export default TweetList;
