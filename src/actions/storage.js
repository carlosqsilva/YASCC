export default class Storage {
  constructor(config) {
    this.DB_NAME = config.name
    this.DB_STORE = config.store
    this.VERSION = config.version || 1

    this.DB = null
  }

  init = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.VERSION)
      request.onerror = () => reject(request.error)

      request.onsuccess = event => {
        this.DB = request.result
        resolve(event)
      }

      request.onupgradeneeded = event => {
        const db = event.target.result
        const storeNames = db.objectStoreNames
        let objStore

        for (const store of this.DB_STORE) {
          if (storeNames.contains(store.name)) {
            objStore = event.target.transaction.objectStore(store.name)
          } else {
            objStore = db.createObjectStore(store.name, {
              keyPath: store.key
            })
          }

          if (store.default) {
            objStore.transaction.oncomplete = event => {
              const refStore = db
                .transaction(store.name, "readwrite")
                .objectStore(store.name)

              store.default.forEach(data => {
                refStore.add(data)
              })
            }
          }
        }
      }
    })
  }

  save = (store, item) => {
    return new Promise((resolve, reject) => {
      const tx = this.DB.transaction(store, "readwrite"),
        objectStore = tx.objectStore(store)

      tx.oncomplete = event => resolve(event)
      tx.onabort = event => reject(event)

      if (Array.isArray(item)) {
        item.forEach(item => {
          objectStore.add(item)
        })
      } else objectStore.add(item)
    })
  }

  delete = (store, keys) => {
    return new Promise((resolve, reject) => {
      const tx = this.DB.transaction(store, "readwrite"),
        objectStore = tx.objectStore(store)

      tx.oncomplete = event => resolve(event)
      tx.onabort = event => reject(event)

      if (Array.isArray(keys)) {
        keys.forEach(id => {
          objectStore.delete(id)
        })
      } else objectStore.delete(keys)
    })
  }

  update = (store, obj) => {
    return new Promise((resolve, reject) => {
      const request = this.DB.transaction(store, "readwrite")
        .objectStore(store)
        .put(obj)

      request.onsuccess = event => resolve(event)
      request.onerror = event => reject(event)
    })
  }

  getStore = store => {
    return new Promise((resolve, reject) => {
      const request = this.DB.transaction(store)
        .objectStore(store)
        .getAll()

      request.onsuccess = ({ target }) => resolve(target.result)
      request.onerror = event => reject(event)
    })
  }

  get = (store, key) => {
    return new Promise((resolve, reject) => {
      const request = this.DB.transaction(store)
        .objectStore(store)
        .get(key)

      request.onsuccess = ({ target }) => resolve(target.result)
      request.onerror = event => reject(event)
    })
  }
}
