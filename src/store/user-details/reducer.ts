import { Action } from '../root-action';
import { Types } from './types';

import { User } from '../../models';

interface PeopleDetailsState {
  loading: boolean;
  error: string | null;
  data: User | null;
}

const initialState: PeopleDetailsState = {
  loading: false,
  error: null,
  data: null,
};

export const reducer = (
  state = initialState,
  action: Action
): PeopleDetailsState => {
  switch (action.type) {
    case Types.LOAD_USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case Types.LOAD_USER_DETAILS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };

    case Types.LOAD_USER_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
