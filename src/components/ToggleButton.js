import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
const ToggleButton = () => {
    const [colorTheme, theme, setTheme] = useDarkMode()
    const isChecked = theme === "light" ? false : true

    return (
        <div className="mx-auto flex flex-col items-center">
            <div className="cursor-pointer  rounded-full relative shadow-sm">

                {theme === "dark" ?
                    <MoonIcon className='w-5 h-5 m-1.5 text-gray-200 absolute rounded-full ' />
                    :
                    <SunIcon className='w-5 h-5 m-1.5 text-yellow-300 absolute rounded-full right-0' />
                }

                <input checked={isChecked} onClick={() => setTheme(colorTheme)} type="checkbox" name="toggle" id="toggle" className="focus:outline-none checkbox w-6 h-6 rounded-full  absolute m-1 shadow-sm appearance-none cursor-pointer checked:right-0 bg-white" />

                <label htmlFor="toggle"
                    className="dark:bg-gray-700 block w-16 h-8 overflow-hidden rounded-full cursor-pointer
            bg-sky-400"/>
            </div>
        </div>
    )
}

export default ToggleButton