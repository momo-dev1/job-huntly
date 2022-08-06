import React from 'react'

const FormSelect = ({ name, list }) => {
    return (
        <div class="col-span-6 sm:col-span-3">
            <label htmlFor={name} class="block text-sm font-medium text-gray-700"> {name} </label>
            {list.map((item, index) => {
                return <select id={index} name={name} class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option>{item}</option>
                </select>
            })}

        </div>
    )
}

export default FormSelect