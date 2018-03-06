import { h, render } from "preact"
import { Provider } from "react-redux"

import {
  // simpleStore,
  configStore
} from "./store"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { PersistGate } from "redux-persist/es/integration/react"

// const store = simpleStore()
const { persistor, store } = configStore()

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.body
)

registerServiceWorker()

if (module.hot) {
  require("preact/devtools")
} else {
  console.log("hello there...")
}
