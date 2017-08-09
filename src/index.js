import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));

StoreInstance.dispatch({type: 'URB_SUBSCRIBE'});

let old = false;

const select = (s) => {
  return s.urb.subscribed
}

const handleChange = () => {

  let neu = select(StoreInstance.getState());
  if (neu !== old) {
    old = neu;
    // Where are we getting this user name?
    StoreInstance.dispatch({type: 'GET_FEED', offset: 0, identifier: 'vvisigoth'});
    //StoreInstance.dispatch({type: 'GET_FEED', offset: 20, identifier: 'vvisigoth'});
  } else {
    return 
  }
}

StoreInstance.subscribe(handleChange);

//registerServiceWorker();
