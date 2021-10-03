import { Types, RequestPayload, Response } from './types';
import {
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersFailure,
} from './actions';

export const fetchUsersRequest = (
  payload: RequestPayload
): FetchUsersRequest => {
  return {
    type: Types.LOAD_USERS_REQUEST,
    payload,
  };
};

export const fetchUsersSuccess = (payload: Response): FetchUsersSuccess => {
  return {
    type: Types.LOAD_USERS_SUCCESS,
    payload,
  };
};

export const fetchUsersFailure = (payload: string): FetchUsersFailure => {
  return {
    type: Types.LOAD_USERS_FAILURE,
    payload,
  };
};
