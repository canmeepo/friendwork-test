import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

import Data from '../data/index';

export const DATA = createTypes('DATA', ['LOAD', 'LOAD_SUCCESS', 'LOAD_FAIL']);

const loadData = () => createAction(DATA.LOAD);
const loadDataSuccess = result => createAction(DATA.LOAD_SUCCESS, result);
const loadDataFail = error => createAction(DATA.LOAD_FAIL, error);

export const requestData = () => {
  return dispatch => {
    dispatch(loadData());
    setTimeout(() => {
      Promise.resolve(Data)
        .then(result => dispatch(loadDataSuccess(result)))
        .catch(error => dispatch(loadDataFail(error)));
    }, 100);
  };
};
