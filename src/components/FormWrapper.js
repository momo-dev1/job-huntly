import React from 'react'

const FormWrapper = ({ children }) => {
    return (
        <div className="relative z-10 flex items-center justify-center bg-gray-200 rounded-md">
            <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    )
}

export default FormWrapper