import React from 'react'

const FormSelect = ({ name, value, list, onChange }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-600 capitalize dark:text-jet"> {name} </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-gray-900/50 dark:text-white dark:bg-rich-black/50 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                {list.map((itemValue, index) => {
                    return <option key={index} value={itemValue}>{itemValue}</option>
                })}
            </select>

        </div>

    )
}

export default FormSelect