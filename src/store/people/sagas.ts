import axios, { AxiosResponse } from 'axios';
import { call, takeEvery, put, take, fork, select } from 'redux-saga/effects';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';

import { fetchUsersRequest, fetchUsersSuccess } from './action-creators';
import { selectPeopleReducer } from './selectors';
import { FetchUsersRequest } from './actions';
import { Types, Response } from './types';

interface Payload {
  page: number;
  search: string;
}

const fetchPeopleList = ({ page, search }: Payload) => {
  const url = `https://swapi.dev/api/people?page=${page}&search=${search}`;

  return axios.get<Response>(url);
};

export function* loadPeopleDetails() {}

export function* loadPeopleList({ payload }: FetchUsersRequest) {
  const response: AxiosResponse<Response> = yield call(
    fetchPeopleList,
    payload
  );
  yield put(fetchUsersSuccess(response.data));
}

export function* loadPageWatcher() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname === '/') {
      const { page, search } = yield select(selectPeopleReducer);

      yield put(fetchUsersRequest({ page, search }));
    }
  }
}

export function* peopleSaga() {
  yield fork(loadPageWatcher);
  yield takeEvery(Types.LOAD_USERS_REQUEST, loadPeopleList);
}
