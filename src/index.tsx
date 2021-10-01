// https://www.youtube.com/watch?v=ah5voE_SGjo

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import App from './pages/App';
import NotFound from './pages/NotFound';

import { store } from './store';
import { history } from './store/root-reducer';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} exact />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
