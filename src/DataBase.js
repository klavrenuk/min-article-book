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
            console.log('success', db);
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
            console.log('success clear');
            resolve(true)
        }
        request.onerror = function(err) {
            console.log("error with clear", err);
            reject();
        }
    })

}

export const readDb = () => {
    return new Promise((resolve, reject) => {
        console.log('function read');

        const objectStore = db.transaction([storeName])
            .objectStore(storeName);

        if(objectStore) {
            objectStore.openCursor().onsuccess = function(event) {
                const cursor = event.target.result;
                if(cursor) {
                    console.log('cursor', cursor.value);
                    if(Array.isArray(cursor.value.categories)) {
                        resolve(cursor.value.categories);
                    }

                } else {
                    resolve([]);
                }
            }

            objectStore.openCursor().onerror = function (event) {
                console.log(event.target);
                reject(null);
            }
        }
    })
}

const save = (categories) => {
    return new Promise((resolve, reject) => {
        console.log('save');

        console.log('db', db);

        const request = db.transaction([storeName], "readwrite")
            .objectStore(storeName).add({
                id: 1,
                categories: categories
            })

        request.onsuccess = function() {
            console.log('success');
            resolve(true);
        }
        request.onerror = function(err) {
            console.error("Unable to add data ", err);
            reject(err);
        }
    })
}

export const saveStore = async(categories) => {
    console.log('start');
    await clearDb();
    await save(categories);
    console.log('finish');
}
