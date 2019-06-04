import { fetch_request, fetch_success, fetch_error } from '../actions/';

const initialState = {
  loading: false,
  weather: null,
  error: null
};
export default function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case fetch_request:
      console.log("Here");
      return { loading: true, weather: null, error: null };
    case fetch_success:
      return { loading: false, weather: action.weather, error: null };
    case fetch_error:
      return { loading: false, error: action.error, weather: null };
    default:
      return state;
  }
}