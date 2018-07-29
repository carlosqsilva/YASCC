export default class Storage {
  constructor(config) {
    this.DB_NAME = config.name
    this.DB_STORE = config.store
    this.VERSION = config.version || 1

    this.DB = null
  }

  init = () => {
    return new Promise((Resolve, Reject) => {
      const request = indexedDB.open(this.DB_NAME, this.VERSION)
      request.onerror = () => Reject(request.error)

      request.onsuccess = event => {
        this.DB = request.result
        Resolve(event)
      }

      request.onupgradeneeded = event => {
        const db = event.target.result

        for (const store of this.DB_STORE) {
          const objStore = db.createObjectStore(store.name, {
            keyPath: store.key
          })

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
    return new Promise((Resolve, Reject) => {
      const tx = this.DB.transaction(store, "readwrite"),
        objectStore = tx.objectStore(store)

      tx.oncomplete = event => Resolve(event)
      tx.onabort = event => Reject(event)

      if (Array.isArray(item)) {
        item.forEach(item => {
          objectStore.add(item)
        })
      } else objectStore.add(item)
    })
  }

  delete = (store, key) => {
    return new Promise((Resolve, Reject) => {
      const tx = this.DB.transaction(store, "readwrite"),
        objectStore = tx.objectStore(store)

      tx.oncomplete = event => Resolve(event)
      tx.onabort = event => Reject(event)

      key.forEach(id => {
        objectStore.delete(id)
      })
    })
  }

  update = (store, obj) => {
    return new Promise((Resolve, Reject) => {
      const request = this.DB.transaction(store, "readwrite")
        .objectStore(store)
        .put(obj)

      request.onsuccess = event => Resolve(event)
      request.onerror = event => Reject(event)
    })
  }

  getAll = store => {
    return new Promise((Resolve, Reject) => {
      const request = this.DB.transaction(store)
        .objectStore(store)
        .getAll()

      request.onsuccess = ({ target }) => Resolve(target.result)
      request.onerror = event => Reject(event)
    })
  }
}
