import React, { useEffect, useState } from 'react';
import TrendingList from './components/TrendingList';
import Header from './components/Header';
import TweetList from './components/TweetList';
import RealtimeTweetList from './components/RealtimeTweetList';
import twitterService from './services/twitter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom"

const App = () => {
  const [trendingTags, setTrending] = useState([]);
  // const [tweetsForTag, setTweetsForTag] = useState(thing);

  useEffect( () => {
    twitterService.getAllTrendingTags().then((initialTrendingTags) => {
      setTrending(initialTrendingTags);
    });
  }, []);

  const match = useRouteMatch('/tweets/:searchQuery');
  const tagName = match
    ? match.params.searchQuery
    : null;

  return (
    <>
      <Header title={'The Loop'} />
      <Switch>
        <Route path="/realtime/coronavirus">
          <RealtimeTweetList />
        </Route>
        <Route path="/tweets/:searchQuery">
          <TweetList tagName={tagName} />
        </Route>
        <Route path="/">
          <TrendingList trending={trendingTags} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
