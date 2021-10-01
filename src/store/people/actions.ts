import { Types, RequestPayload } from './types';

export interface FetchUsersRequest {
  type: Types.LOAD_USERS_REQUEST;
  payload: RequestPayload;
}

export type Actions = FetchUsersRequest;
