export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}
