import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "../actions/"

export function* watcherSaga() {
  yield takeLatest(FETCH_REQUEST, workerSaga);
}

function* workerSaga(lat, lng) {
  try {
    const weather = yield call(() => fetchWeather(lat, lng));
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