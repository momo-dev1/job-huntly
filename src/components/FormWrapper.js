import React from 'react'

const FormWrapper = ({ children }) => {
    return (
        <div className="relative flex items-center justify-center bg-gray-200 " >
            <div style={{
                backgroundColor: "#f8f9d2",
                backgroundImage: "linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)"
            }}
                className='inset-0 absolute z-10' />
            <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8 z-20">
                {children}
            </div>
        </div>
    )
}

export default FormWrapper


