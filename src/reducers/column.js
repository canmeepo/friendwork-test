import { COLUMN } from '../actions/column';

const defaultState = {
  omit: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case COLUMN.TOGGLE_COLUMN:
      return {
        ...state,
        omit: state.omit.includes(action.payload.key)
          ? state.omit.filter(i => i !== action.payload.key)
          : [...state.omit, action.payload.key]
      };

    default:
      return state;
  }
};

export default reducer;
