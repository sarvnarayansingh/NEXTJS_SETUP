import { combineReducers } from 'redux';
import { GlobalReducer } from '../Reducer/GlobalReducer';

export default combineReducers({
  globalData: GlobalReducer
});
