// https://www.youtube.com/watch?v=ah5voE_SGjo

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { Routes } from './routes';

import { store } from './store';
import { history } from './store/root-reducer';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
