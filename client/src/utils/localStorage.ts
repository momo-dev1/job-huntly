// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string) {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
}

export function removeLocalStorage(key: string) {
    localStorage.removeItem(key);
}
