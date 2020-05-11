import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import TweetView from './TweetView';

const RealtimeTweetList = props => {
  const [tweets, setTweets] = useState([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const socket = socketIOClient();
    socket.on('initialTweets', data => {
      const newTweets = tweets.concat(data);
      setTweets(newTweets);
      setInitialized(true);
    });
  }, []);

  useEffect(() => {
    if (initialized) {
      const socket = socketIOClient();
      socket.on('newTweet', data => {
        tweets.push(data.newTweet);
        setTweets([...tweets]);
      });
    }
  }, [initialized]);

  const filteredTweets = () => {
    return tweets.filter((v,i,a) => a.findIndex(t => (t.id === v.id)) ===i);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {filteredTweets().map(tweet =>
        <TweetView
          key={tweet.id}
          id={tweet.id}
          name={tweet.user.screen_name}
          profilePic={tweet.user.profile_image_url}
          createdDate={tweet.created_at}
          text={tweet.text} />
      )}
    </div>
  );
};

export default RealtimeTweetList;
