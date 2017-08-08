const listener = (e, r, s) => {
  console.debug(e);
  console.debug(r);
  if (r.data.connect) {
      s.dispatch({type: 'SUBSCRIBE_APP'});
  } else if (r.data.length > 1) {
      s.dispatch({type: 'FEED_RECEIVED', data: r.data, feedType: 'tumblr'});
  }
};

const urbWare = store => next => action => {
  next(action);
  switch (action.type) {
    case 'URB_SUBSCRIBE':
      console.debug('subscribing!');
      // Seems like there could be some async probs here?
      window.urb.init(function() {
        window.urb.appl = "tumblr";
        window.urb.bind('/path', function(e, r) {
          listener(e, r, store);
        })
      });
      break
    case 'GET_FEED':
      console.debug('GET FEED');
      window.urb.send({
        'identifier': 'vvisigoth',
        'id-start': 0
      }, {'mark': 'tumblr-get-posts'});
      break
    default:
      break
  }
};

export default urbWare;
