import { h, render } from "preact"
import { Provider } from "preact-redux"

import { configStore } from "./store"
import { PersistGate } from "redux-persist/es/integration/react"
import registerServiceWorker from "./registerServiceWorker"
import App from "./App"

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
} else {
  registerServiceWorker()
  console.log("%c hello there...", "font-size: 30px; color: red")
}
