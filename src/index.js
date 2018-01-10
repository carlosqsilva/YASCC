import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react'
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import {simpleStore} from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const { persistor, store } = configStore()
const store = simpleStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

  registerServiceWorker();
    // <PersistGate persistor={persistor}>
    // </PersistGate>
