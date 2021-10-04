import { User } from '../../models';
import { Types } from './types';

export interface LoadUserDetailsRequest {
  type: Types.LOAD_USER_DETAILS_REQUEST;
  payload: string;
}

export interface LoadUserDetailsSuccess {
  type: Types.LOAD_USER_DETAILS_SUCCESS;
  payload: User;
}

export interface LoadUserDetailsFailure {
  type: Types.LOAD_USER_DETAILS_FAILURE;
  payload: string;
}

export type Actions =
  | LoadUserDetailsRequest
  | LoadUserDetailsSuccess
  | LoadUserDetailsFailure;
