import { Action } from '../root-action';
import { Types, RequestPayload, Response } from './types';

interface PeopleState {
  page: number;
  search: string;
  loading: boolean;
  error: string | null;
  data: Response | null;
}

const initialState: PeopleState = {
  page: 1,
  search: '',
  loading: false,
  error: null,
  data: null,
};

const loadUsersRequest = (
  state: PeopleState,
  { page, search }: RequestPayload
) => ({
  ...state,
  loading: true,
  page,
  search,
});

export const reducer = (state = initialState, action: Action): PeopleState => {
  switch (action.type) {
    case Types.LOAD_USERS_REQUEST:
      return loadUsersRequest(state, action.payload);

    case Types.LOAD_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };

    case Types.LOAD_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
