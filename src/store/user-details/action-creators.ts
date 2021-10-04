import { Types } from './types';
import {
  LoadUserDetailsRequest,
  LoadUserDetailsSuccess,
  LoadUserDetailsFailure,
} from './actions';
import { User } from '../../models';

export const loadUserDetailsRequest = (id: string): LoadUserDetailsRequest => {
  return {
    type: Types.LOAD_USER_DETAILS_REQUEST,
    payload: id,
  };
};

export const loadUsersDetailsSuccess = (
  payload: User
): LoadUserDetailsSuccess => {
  return {
    type: Types.LOAD_USER_DETAILS_SUCCESS,
    payload,
  };
};

export const loadUsersDetailsFailure = (
  payload: string
): LoadUserDetailsFailure => {
  return {
    type: Types.LOAD_USER_DETAILS_FAILURE,
    payload,
  };
};
