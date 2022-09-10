import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

const ToggleButton = () => {
    const [colorTheme, theme, setTheme] = useDarkMode()
    const isChecked = theme === "light" ? false : true

    return (
        <div className="mx-auto  flex flex-col items-center">

            <div className="cursor-pointer  rounded-full relative shadow-sm">

                <input checked={isChecked} onClick={() => setTheme(colorTheme)} type="checkbox" name="toggle" id="toggle" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer checked:right-0" />
                <label htmlFor="toggle" className="dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full cursor-pointer
            bg-gray-300"/>
            </div>

        </div>
    )
}
// bg-blue-600
export default ToggleButton