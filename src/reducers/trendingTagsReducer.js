import twitterService from '../services/twitter';

const trendingTagsReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_TRENDING_TAGS':
    // eslint-disable-next-line no-case-declarations
    const initialTrendingTags = action.data.concat();
    return initialTrendingTags;
  default:
    return state;
  }
};

export const initializeTrendingTags = () => {
  return async dispatch => {
    const initialTrendingTags = await twitterService.getAllTrendingTags();
    dispatch({
      type: 'INIT_TRENDING_TAGS',
      data: initialTrendingTags
    });
  };
};

export default trendingTagsReducer;