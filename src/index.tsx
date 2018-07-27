import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import Routes from './routes/index'

import './index.css';

import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
