import { h, render } from "preact"
import { Provider } from "preact-redux"

import store from "./store"
import { init, online, offline } from "./store/actions"
import registerServiceWorker from "./registerServiceWorker"
import App from "./App"

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
)

window.addEventListener("online", () => {
  store.dispatch(online())
})

window.addEventListener("offline", () => {
  store.dispatch(offline())
})

window.addEventListener("load", () => {
  store.dispatch(init()).then(() => registerServiceWorker())
  console.log("%c hello there...", "font-size: 30px; color: red")
})

// const PageVisibility = {
//   originalTitle: document.title,
//   emoji: "🎶",
//   init() {
//     if (document.hidden) {
//       const { isPlaying, currentSong } = store.getState().playlist

//       if (isPlaying) {
//         document.title = `${this.emoji} ${currentSong.title}`
//       }
//     } else {
//       document.title = this.originalTitle
//     }
//   }
// }

// document.addEventListener("visibilitychange", PageVisibility.init)
