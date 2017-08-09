export default (state=false, action) => {
  switch (action.type) {
    case 'GET_FEED':
      return true;
    case 'FEED_RECEIVED':
      return false;
    default:
      return state;
  }
};
