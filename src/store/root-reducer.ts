import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createHashHistory } from 'history';

import { reducer as users } from './users/reducer';
import { reducer as userDetails } from './user-details/reducer';

export const history = createHashHistory({
  hashType: 'slash',
});

const rootReducer = combineReducers({
  users,
  userDetails,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
