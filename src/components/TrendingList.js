import React from 'react';

const TrendingList = props => {
  const trendingTags = () => {
    return props.trending;
  };

  return (
    <div>
      {/* {trendingTags().map(trendingTag =>
        <div key={trendingTag.name}>
          <div>
            {trendingTag.name}
          </div>
          <div>
            has {trendingTag.tweet_volume} tweets
          </div>
        </div>
      )} */}
    </div>
  );
};

export default TrendingList;
