import { all, spawn } from 'redux-saga/effects';

import { peopleSaga, loadPeopleList } from './people/sagas';

export function* rootSaga() {
  const sagas = [peopleSaga, loadPeopleList];

  yield all(sagas.map((s) => spawn(s)));
}
