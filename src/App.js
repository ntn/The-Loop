import React, { useEffect, useState } from 'react';
import TrendingList from './components/TrendingList';
import twitterService from './services/twitter';

const App = () => {
  const [trendingTags, setTrending] = useState([]);

  useEffect( () => {
    twitterService.getAll().then((initialTrendingTags) => {
      setTrending(initialTrendingTags);
    });
  }, []);

  console.log('trending: ', trendingTags);

  return (
    <div>
      <h2>Trending Tweets</h2>
      <TrendingList trending={trendingTags} />
    </div>
  );
};

export default App;
