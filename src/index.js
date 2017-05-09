import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import Stores from './stores';
import App from './App';

const stores = Stores.create();

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
