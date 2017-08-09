export const refreshFeed = (offset, identifier) => {
  {
    return {
      type: 'GET_FEED',
      offset,
      identifier
    }
  }
};
