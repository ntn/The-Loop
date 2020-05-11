import React from 'react';
import { connect } from 'react-redux';
import TrendingTagView from './TrendingTagView';

const TrendingList = props => {
  const trendingTags = () => {
    const sanitizedTrendingTags = props.trendingTags.map((trendingTag) => {
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

const mapStateToProps = (state) => {
  return {
    trendingTags: state.trendingTags
  };
};
const connectedTrendingList = connect(mapStateToProps, null)(TrendingList);

export default connectedTrendingList;
