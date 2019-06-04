import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from '../actions/';

const initialState = {
  loading: false,
  weather: null,
  error: null
};
export default function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return { loading: true, weather: null, error: null };
    case FETCH_SUCCESS:
      return { loading: false, weather: action.weather, error: null };
    case FETCH_ERROR:
      return { loading: false, error: action.error, weather: null };
    default:
      return state;
  }
}