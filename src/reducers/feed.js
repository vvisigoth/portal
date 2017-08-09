const getFeed = (state = {}, feedType) => {
};

const feedReceived = (state = {}, data, type) => {
  let tmp ={};
  if (state[type]) {
    // Assume rev chron sorting
    tmp[type] = [...state[type], ...data];
  } else {
    tmp[type] = data;
  }
  return tmp
};

export default(state = {}, action) => {
  switch (action.type) {
    case 'FEED_RECEIVED':
      return feedReceived(state, action.data, action.feedType);
    default:
      return state;
  }
};


