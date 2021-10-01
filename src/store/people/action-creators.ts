import { Types } from './types';
import { FetchUsersRequest } from './actions';

import { RequestPayload } from './types';

export const fetchUsersRequest = (
  payload: RequestPayload
): FetchUsersRequest => {
  return {
    type: Types.LOAD_USERS_REQUEST,
    payload,
  };
};
