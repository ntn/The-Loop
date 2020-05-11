import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTrendingTags } from './reducers/trendingTagsReducer';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import TrendingList from './components/TrendingList';
import Header from './components/Header';
import TweetList from './components/TweetList';
import RealtimeTweetList from './components/RealtimeTweetList';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeTrendingTags());
  }, [dispatch]);

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
          <TrendingList />
        </Route>
      </Switch>
    </>
  );
};

export default App;
