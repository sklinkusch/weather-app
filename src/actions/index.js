// action types - fetching data
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
// action types - get geolocation
// const GEO_REQUEST = "GEO_REQUEST";
// const GEO_SUCCESS = "GEO_SUCCESS";
// const GEO_ERROR = "GEO_ERROR";

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
// export const geo_request = () => {
// return { type: GEO_REQUEST };
// }
// export const geo_success = (lat, lng) => {
// return { type: GEO_SUCCESS, lat, lng };
// }
// export const geo_error = (error) => {
// return { type: GEO_ERROR, error };
// }
export function fetchRequest(lat, lng) {
  return dispatch => {
    dispatch(fetch_request());
    return fetch(`https://darksky.sklinkusch.now.sh/?${lat},${lng}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return dispatch(fetch_success(data));
      })
      .catch(error => dispatch(fetch_error(error)));
  }
}