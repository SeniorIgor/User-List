import { Types, RequestPayload, Response } from './types';
import {
  LoadUsersRequest,
  LoadUsersSuccess,
  LoadUsersFailure,
} from './actions';

export const loadUsersRequest = (payload: RequestPayload): LoadUsersRequest => {
  return {
    type: Types.LOAD_USERS_REQUEST,
    payload,
  };
};

export const loadUsersSuccess = (payload: Response): LoadUsersSuccess => {
  return {
    type: Types.LOAD_USERS_SUCCESS,
    payload,
  };
};

export const loadUsersFailure = (payload: string): LoadUsersFailure => {
  return {
    type: Types.LOAD_USERS_FAILURE,
    payload,
  };
};
