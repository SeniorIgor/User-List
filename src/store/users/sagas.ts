import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import {
  call,
  put,
  take,
  fork,
  select,
  cancel,
  takeLatest,
} from 'redux-saga/effects';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';
import { matchPath } from 'react-router';
import { Task } from 'redux-saga';

import {
  loadUsersRequest,
  loadUsersSuccess,
  loadUsersFailure,
} from './action-creators';
import { selectUsersReducer } from './selectors';
import { RouteNames, getRouteConfig } from '../../routes';
import { LoadUsersRequest } from './actions';
import { Types, Response } from './types';

interface Payload {
  page: number;
  search: string;
  cancelToken: CancelTokenSource;
}

function* fetchPeopleList(payload: Payload) {
  try {
    const { page, search, cancelToken } = payload;
    const url = `https://swapi.dev/api/people?page=${page}&search=${search}`;

    const response: AxiosResponse<Response> = yield call(axios.get, url, {
      cancelToken: cancelToken.token,
    });

    yield put(loadUsersSuccess(response.data));
  } catch (err) {
    yield put(loadUsersFailure((err as Error).message));
  }
}

export function* loadUsersSaga() {
  let task: Task | null = null;
  let cancelToken = axios.CancelToken.source();

  while (true) {
    const { payload }: LoadUsersRequest = yield take(Types.LOAD_USERS_REQUEST);

    if (task) {
      cancelToken.cancel();
      yield cancel(task);
      cancelToken = axios.CancelToken.source();
    }

    task = yield fork(fetchPeopleList, { ...payload, cancelToken });
  }
}

function* routeChangeSaga() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);
    const { pathname } = action.payload.location;

    if (matchPath(pathname, getRouteConfig(RouteNames.MAIN_ROUTE))) {
      const { page, search } = yield select(selectUsersReducer);

      yield put(loadUsersRequest({ page, search }));
    }
  }
}

export function* usersSaga() {
  yield fork(routeChangeSaga);
  yield takeLatest;
}
