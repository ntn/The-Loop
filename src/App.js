import React, { useEffect, useState } from 'react';
import TrendingList from './components/TrendingList';
import Header from './components/Header';
import twitterService from './services/twitter';

const App = () => {
  const [trendingTags, setTrending] = useState([]);

  useEffect( () => {
    twitterService.getAll().then((initialTrendingTags) => {
      setTrending(initialTrendingTags);
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
