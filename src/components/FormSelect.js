import React from 'react'

const FormSelect = ({ name, value, list, onChange }) => {
    return (
        <div>
            <label htmlFor={name} className="block capitalize text-sm font-medium text-gray-700"> {name} </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                {list.map((itemValue, index) => {
                    return <option key={index} value={itemValue}>{itemValue}</option>
                })}
            </select>

        </div>

    )
}

export default FormSelect