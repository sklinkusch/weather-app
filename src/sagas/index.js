import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "../actions/"

export function* watcherSaga() {
  yield takeEvery(FETCH_REQUEST, workerSaga);
}

function* workerSaga(action) {
  try {
    const { lat, lng } = action;
    const response = yield call(() => fetchWeather(lat, lng));
    const weather = response.data;
    yield put({ type: FETCH_SUCCESS, weather });
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function fetchWeather(lat, lng) {
  return axios({
    method: "get",
    url: `https://darksky.sklinkusch.now.sh/?${lat},${lng}`
  })
}