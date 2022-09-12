import React from 'react'

const Button = ({ name, isInvalid = false, isLoading }) => {
    return (
        <div>
            <button
                disabled={isInvalid || isLoading}
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm bg-blue-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {name}
            </button>
        </div>
    )
}

export default Button