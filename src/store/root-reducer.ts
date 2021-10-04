import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { reducer as users } from './users/reducer';
import { reducer as userDetails } from './user-details/reducer';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  users,
  userDetails,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
