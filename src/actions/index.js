// action types - fetching data
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
// action types - get geolocation
const GEO_REQUEST = "GEO_REQUEST";
const GEO_SUCCESS = "GEO_SUCCESS";
const GEO_ERROR = "GEO_ERROR";

// action creators - fetching data
export const fetch_request = () => {
  return { type: FETCH_REQUEST };
}
export const fetch_success = (data) => {
  return { type: FETCH_SUCCESS, weather: data };
}
export const fetch_error = (error) => {
  return { type: FETCH_ERROR, error: error };
}
// action creators - get geolocation
export const geo_request = () => {
  return { type: GEO_REQUEST };
}
export const geo_success = (lat, lng) => {
  return { type: GEO_SUCCESS, lat, lng };
}
export const geo_error = (error) => {
  return { type: GEO_ERROR, error };
}