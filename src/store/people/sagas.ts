import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';

import { Response } from './types';

interface Payload {
  page: number;
  search: string;
}

interface LoadPeopleList {
  payload: Payload;
}

// пишу строку на русском и вроде не подчеркивает

const fetchPeopleList = ({ page, search }: Payload) => {
  const url = `https://swapi.dev/api/people?page=${page}&search=${search}`;

  return axios.get<Response>(url);
};

export function* loadPeopleDetails() {}

export function* loadPeopleList({ payload }: LoadPeopleList) {
  const data: Response = yield call(fetchPeopleList, payload);
  yield put({});
}

export function* watcher() {
  takeEvery('', loadPeopleList);
}
