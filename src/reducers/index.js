import { combineReducers } from 'redux';

import sort from './sort';
import data from './data';
import column from './column';

export default combineReducers({
  column,
  sort,
  data
});
