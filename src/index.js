import { h, render } from "preact"
import { Provider } from "preact-redux"

import { configStore } from "./store"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { PersistGate } from "redux-persist/es/integration/react"

const { persistor, store } = configStore()

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.body
)

if (module.hot) {
  require("preact/devtools")
  document.getElementById("loader").remove() //Remove the loader animation for development sanity
} else {
  registerServiceWorker()
  console.log("hello there...")
}
