import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import Stores from './stores';
import App from './App';

const stores = Stores.create();

render(
  <Provider {...stores}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#app')
);
