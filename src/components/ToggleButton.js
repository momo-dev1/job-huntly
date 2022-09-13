import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
const ToggleButton = () => {
    const [colorTheme, theme, setTheme] = useDarkMode()
    const isChecked = theme === "light" ? false : true

    return (
        <div className="flex flex-col items-center mx-auto">
            <div className="relative rounded-full shadow-sm cursor-pointer">

                {theme === "dark" ?
                    <MoonIcon className='w-5 h-5 m-1.5 text-gray-200 absolute rounded-full ' />
                    :
                    <SunIcon className='w-5 h-5 m-1.5 text-yellow-300 absolute rounded-full right-0' />
                }

                <input defaultChecked={isChecked} onClick={() => setTheme(colorTheme)} type="checkbox" name="toggle" id="toggle" className="absolute w-6 h-6 m-1 bg-white rounded-full shadow-sm appearance-none cursor-pointer focus:outline-none checkbox checked:right-0" />

                <label htmlFor="toggle"
                    className="block w-16 h-8 overflow-hidden rounded-full cursor-pointer dark:bg-gray-700 bg-sky-400" />
            </div>
        </div>
    )
}

export default ToggleButton