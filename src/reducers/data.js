import { DATA } from '../actions/data';

const defaultState = {
  loading: true,
  error: false,
  dataset: []
};

// Not implementing anything here, typically data would be loaded async, and
// you might do an action that is used to show a loading spinner, and then
// hide it, and maybe you manipulate data before setting it into the store
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case DATA.LOAD:
      return {
        ...state,
        error: false,
        loading: true
      };

    case DATA.LOAD_SUCCESS:
      return {
        ...state,
        dataset: action.payload,
        loading: false
      };

    case DATA.LOAD_FAIL:
      return {
        ...state,
        error: true,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
