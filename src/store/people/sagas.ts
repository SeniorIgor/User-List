import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { call, put, take, fork, select, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';
import { matchPath } from 'react-router';
import { Task } from 'redux-saga';

import { fetchUsersRequest, fetchUsersSuccess } from './action-creators';
import { selectPeopleReducer } from './selectors';
import { RouteNames, getRouteConfig } from './../../routes';
import { FetchUsersRequest } from './actions';
import { Types, Response } from './types';

interface Payload {
  page: number;
  search: string;
  cancelToken: CancelTokenSource;
}

function* fetchPeopleList(payload: Payload) {
  const { page, search, cancelToken } = payload;
  const url = `https://swapi.dev/api/people?page=${page}&search=${search}`;

  const response: AxiosResponse<Response> = yield call(axios.get, url, {
    cancelToken: cancelToken.token,
  });

  yield put(fetchUsersSuccess(response.data));
}

export function* loadPeopleDetails() {}

export function* loadPeopleList() {
  let task: Task | null = null;
  let cancelToken = axios.CancelToken.source();

  while (true) {
    const { payload }: FetchUsersRequest = yield take(Types.LOAD_USERS_REQUEST);

    if (task) {
      cancelToken.cancel();
      yield cancel(task);
      cancelToken = axios.CancelToken.source();
    }

    task = yield fork(fetchPeopleList, { ...payload, cancelToken });
  }
}

export function* loadPageWatcher() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);
    const { pathname } = action.payload.location;

    if (matchPath(pathname, getRouteConfig(RouteNames.MAIN_ROUTE))) {
      const { page, search } = yield select(selectPeopleReducer);

      yield put(fetchUsersRequest({ page, search }));
    }

    const detailsPage = matchPath(
      pathname,
      getRouteConfig(RouteNames.PEOPLE_DETAILS_ROUTE)
    );

    if (detailsPage) {
      console.log('Details page');
    }
  }
}

export function* peopleSaga() {
  yield fork(loadPageWatcher);
}
