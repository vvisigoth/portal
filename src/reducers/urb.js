export default(state = {subscribed:false}, action) => {
  switch (action.type) {
    case 'SUBSCRIBE_APP':
      console.debug('subscribing app');
      let n = Object.assign(state, {subscribed: true});
      console.debug(n);
      return n;
    default:
      return state;
  }
};
