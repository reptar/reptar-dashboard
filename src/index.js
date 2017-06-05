import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import './index.css';
import Stores from './stores';
import App from './App';

const stores = Stores.create({
  routing: new RouterStore(),
});

const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, stores.routing);

render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#app')
);
