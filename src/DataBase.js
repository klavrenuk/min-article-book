if (!window.indexedDB) {
    window.alert("Ваш браузер не поддерживает IndexedDB.")
}

let db;
const dbName = 'miniArticleBook';
const storeName = 'store';

export const initDb = () => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(dbName, 4);

        request.onerror = function(err) {
            console.error(err);
            reject(err);
        };

        request.onsuccess = function() {
            db = request.result;
            resolve();
        };

        request.onupgradeneeded = function(event) {
            db = event.target.result;
            db.createObjectStore(storeName, {keyPath: "id"});
            resolve();
        }
    })
}

export const clearDb = () => {
    return new Promise((resolve, reject) => {
        const request = db.transaction([storeName], "readwrite")
            .objectStore(storeName)
            .clear()

        request.onsuccess = function() {
            resolve(true)
        }
        request.onerror = function(err) {
            console.error(err);
            reject(err);
        }
    })

}

export const readDb = () => {
    return new Promise((resolve, reject) => {
        try {
            const objectStore = db.transaction([storeName])
                .objectStore(storeName);

            if(objectStore) {
                objectStore.openCursor().onsuccess = function(event) {
                    const cursor = event.target.result;
                    if(cursor) {
                        if(Array.isArray(cursor.value.categories)) {
                            resolve(cursor.value.categories);
                        } else {
                            resolve([]);
                        }

                    } else {
                        resolve([]);
                    }
                }

                objectStore.openCursor().onerror = function() {
                    reject(null);
                }
            }

        } catch(err) {
            resolve([]);
        }
    })
}

const save = (categories) => {
    return new Promise((resolve, reject) => {
        const request = db.transaction([storeName], "readwrite")
            .objectStore(storeName).add({
                id: 1,
                categories: categories
            })

        request.onsuccess = function() {
            resolve(true);
        }
        request.onerror = function(err) {
            console.error("Unable to add data ", err);
            reject(err);
        }
    })
}

export const saveStore = async(categories) => {
    await clearDb();
    await save(categories);
}