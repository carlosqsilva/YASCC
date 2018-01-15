import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  // simpleStore,
  configStore} from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/es/integration/react'

// const store = simpleStore()
const { persistor, store } = configStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();