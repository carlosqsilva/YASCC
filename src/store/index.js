import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const config = {
  key: 'root',
  storage,
  blacklist: ['audioUrl']
}

const reducer = persistReducer(config, rootReducer)

export const configStore = () => {
  let store = createStore(reducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { persistor, store}
}

export const simpleStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}