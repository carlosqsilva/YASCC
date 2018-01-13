import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {simpleStore} from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = simpleStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();