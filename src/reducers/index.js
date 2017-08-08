import urb from './urb';
import feed from './feed';
//import loading from './loading';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  feed,
  urb
});


export default rootReducer;


