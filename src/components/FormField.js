import React from 'react'

const FormField = ({ id, value, onChange, name, type, label, children, register, isRegister, registerName }) => {

    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-600"
            >
                {label}
            </label>
            <div className="mt-1">
                {isRegister ?
                    <input
                        {...register(registerName)}
                        type={type}
                        className="block w-full px-3 py-2 text-gray-600 border bg-white border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                    />
                    :
                    <input
                        id={id}
                        value={value}
                        onChange={onChange}
                        name={name}
                        type={type}
                        required
                        className="block w-full px-3 py-2 text-gray-600 bg-white border border-gray-900/50 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-[#5865f2] focus:border-[#5865f2] sm:text-sm"
                    />}
                {children}
            </div>
        </div>
    )
}

export default FormField