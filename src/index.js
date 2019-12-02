import { h, render } from "preact";
import { Provider } from "react-redux";

import store from "./store";
import { init, online, offline } from "@/actions";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);

window.addEventListener("online", () => {
  store.dispatch(online());
});

window.addEventListener("offline", () => {
  store.dispatch(offline());
});

window.addEventListener("load", () => {
  store.dispatch(init()).then(() => registerServiceWorker());
  console.log("%c hello there...", "font-size: 30px; color: red");
});

if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}
