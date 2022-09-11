import React from 'react'

const FormField = ({ id, value, onChange, name, type, label }) => {

    return (
        <div>
            <label
                htmlFor={id}
                className="block capitalize text-sm font-medium text-gray-600 dark:text-jet"
            >
                {label}
            </label>
            <div className="mt-1">
                <input
                    id={id}
                    value={value}
                    onChange={onChange}
                    name={name}
                    type={type}
                    required
                    className="block w-full px-3 py-2 text-gray-600 bg-white dark:text-white dark:bg-rich-black/50 border border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                />
            </div>
        </div>
    )
}

export default FormField