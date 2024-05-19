import { useState, useEffect } from "react"
import { setLocalStorage, getLocalStorage } from "../utils/localStorage"

const useDarkMode = () => {
    const [theme, setTheme] = useState(getLocalStorage("isDark") || "light")
    const colorTheme = theme === "dark" ? "light" : "dark"
    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        setLocalStorage("isDark", theme)
    }, [theme, colorTheme])
    return [colorTheme, theme, setTheme]
}

export default useDarkMode