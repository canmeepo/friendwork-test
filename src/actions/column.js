import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

export const COLUMN = createTypes('COLUMN', ['TOGGLE_COLUMN']);

export const toggleColumn = key => createAction(COLUMN.TOGGLE_COLUMN, { key });
