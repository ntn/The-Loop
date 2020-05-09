import React, { useEffect, useState } from 'react';
import TrendingList from './components/TrendingList';
import Header from './components/Header';
import twitterService from './services/twitter';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3003";


const App = () => {
  const [trendingTags, setTrending] = useState([]);

  useEffect( () => {
    twitterService.getAll().then((initialTrendingTags) => {
      setTrending(initialTrendingTags);
    });

    const socket = socketIOClient(ENDPOINT);
    socket.on("initialTweets", data => {
      console.log("initialTweets: ", data);
    });

    socket.on("newTweet", data => {
      console.log("newTweet: ", data);
    });
  }, []);

  return (
    <>
      <Header title={'The Loop'} />
      <TrendingList trending={trendingTags} />
    </>
  );
};

export default App;
