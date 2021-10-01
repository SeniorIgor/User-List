import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { reducer as people } from './people/reducer';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  people,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };
