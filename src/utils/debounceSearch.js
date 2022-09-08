export const debounceSearch = (fn) => {
    let timer;
    return function (...args) {
        const self = this
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn.apply(self, args)
        }, 5500)
    }
}