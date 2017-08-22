import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

export const SORT = createTypes('SORT', ['SORT_BY']);

export const sortBy = (key, direction) => createAction(SORT.SORT_BY, { key, direction });
