import React from 'react';
import TrendingTagView from './TrendingTagView';

const TrendingList = props => {
  const trendingTags = () => {
    const sanitizedTrendingTags = props.trending.map((trendingTag) => {
      const name = trendingTag.name[0] === '#'
        ? trendingTag.name
        :`#${trendingTag.name.replace(/\s/g, '')}`;
      return { ...trendingTag, name };
    });
    return sanitizedTrendingTags;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {trendingTags().map(trendingTag =>
        <TrendingTagView key={trendingTag.name} name={trendingTag.name} tweetVolume={trendingTag.tweet_volume} />
      )}
    </div>
  );
};

export default TrendingList;
