import * as actions from '../actions/';

export function fetchReducer(state = {}, action) {
  switch (action.type) {
    case actions.fetch_request:
      return { ...state, loading: true };
    case actions.fetch_success:
      return { ...state, loading: false, weather: action.weather };
    case actions.fetch_error:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}