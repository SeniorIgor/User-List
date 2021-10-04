import { Types, RequestPayload, Response } from './types';

export interface LoadUsersRequest {
  type: Types.LOAD_USERS_REQUEST;
  payload: RequestPayload;
}

export interface LoadUsersSuccess {
  type: Types.LOAD_USERS_SUCCESS;
  payload: Response;
}

export interface LoadUsersFailure {
  type: Types.LOAD_USERS_FAILURE;
  payload: string;
}

export type Actions = LoadUsersRequest | LoadUsersSuccess | LoadUsersFailure;
