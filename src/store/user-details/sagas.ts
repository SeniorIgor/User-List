import axios, { AxiosResponse } from 'axios';
import { call, put, take, fork, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';
import { matchPath } from 'react-router';

import {
  loadUserDetailsRequest,
  loadUsersDetailsSuccess,
  loadUsersDetailsFailure,
} from './action-creators';
import { LoadUserDetailsRequest } from './actions';
import { RouteNames, getRouteConfig } from '../../routes';
import { Types } from './types';
import { User } from '../../models';

export function* loadUserDetailsSaga({ payload }: LoadUserDetailsRequest) {
  try {
    const url = `https://swapi.dev/api/people/${payload}`;

    const response: AxiosResponse<User> = yield call(axios.get, url);

    yield put(loadUsersDetailsSuccess(response.data));
  } catch (err) {
    yield put(loadUsersDetailsFailure((err as Error).message));
  }
}

function* routeChangeSaga() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);
    const { pathname } = action.payload.location;

    const detailsPage = matchPath<{ id: string }>(
      pathname,
      getRouteConfig(RouteNames.USER_DETAILS_ROUTE)
    );

    if (detailsPage) {
      const { id } = detailsPage.params;

      yield put(loadUserDetailsRequest(id));
    }
  }
}

export function* userDetailsSaga() {
  yield fork(routeChangeSaga);
  yield takeEvery(Types.LOAD_USER_DETAILS_REQUEST, loadUserDetailsSaga);
}
