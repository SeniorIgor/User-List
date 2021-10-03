import { Types, RequestPayload, Response } from './types';

export interface FetchUsersRequest {
  type: Types.LOAD_USERS_REQUEST;
  payload: RequestPayload;
}

export interface FetchUsersSuccess {
  type: Types.LOAD_USERS_SUCCESS;
  payload: Response;
}

export interface FetchUsersFailure {
  type: Types.LOAD_USERS_FAILURE;
  payload: string;
}

export type Actions = FetchUsersRequest | FetchUsersSuccess | FetchUsersFailure;
