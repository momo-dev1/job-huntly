import React from 'react'

const SubmitButton = ({ name, isInvalid = false }) => {
    return (
        <div>
            <button
                disabled={isInvalid}
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium bg-blue-600 text-white bg-blue-medium border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {name}
            </button>
        </div>
    )
}

export default SubmitButton