import { get, set } from 'idb-keyval'

// Función para guardar una clave-valor en el almacenamiento
const idxDBSet = (key, value) => {
    set(key, value)
        .then(() => {
            console.log("Valor guardado en el almacenamiento");
        })
        .catch((error) => {
            console.error("Error al guardar el valor:", error);
        });
}

// Función para recuperar el valor de una clave del almacenamiento
const idxDBGet = (key, callback) => {
    get(key)
        .then((value) => {
            callback(value);
        })
        .catch((error) => {
            console.error(
                "Error al leer el valor de audio seleccionado:",
                error
            );
            callback(null, error);
        });
}

// Check if a file is cached by a service worker
const isFileCached = (fileUrl, cacheName) => {
    return caches
        .open(cacheName)
        .then(function (cache) {
            return cache.match(fileUrl);
        })
        .then(function (response) {
            if (response) {
                console.log(`File ${fileUrl} is cached!`);
                return true;
            } else {
                console.log(`File ${fileUrl} is NOT cached!`);
                return false;
            }
        });
}

export {
    idxDBSet,
    idxDBGet,
    isFileCached
}