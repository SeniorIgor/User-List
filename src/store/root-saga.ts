import { all, spawn } from 'redux-saga/effects';

import { usersSaga, loadUsersSaga } from './users/sagas';
import { userDetailsSaga } from './user-details/sagas';

export function* rootSaga() {
  const sagas = [usersSaga, loadUsersSaga, userDetailsSaga];

  yield all(sagas.map((s) => spawn(s)));
}
