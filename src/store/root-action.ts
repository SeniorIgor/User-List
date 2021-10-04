import { Actions as UsersActions } from './users/actions';
import { Actions as UserDetailsActions } from './user-details/actions';

export type Action = UsersActions | UserDetailsActions;
