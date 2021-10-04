import { User } from '../../models';

export enum Types {
  LOAD_USERS_REQUEST = '@users/LOAD_USERS_REQUEST',
  LOAD_USERS_SUCCESS = '@users/LOAD_USERS_SUCCESS',
  LOAD_USERS_FAILURE = '@users/LOAD_USERS_FAILURE',
}

export interface RequestPayload {
  page: number;
  search: string;
}

export interface Response {
  count: number;
  next: string | null;
  previous: string | null;
  results: User[];
}
