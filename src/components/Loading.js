import React from 'react'

const Loading = () => {
    return (
        <div className='flex items-center justify-center absolute top-8 left-0 right-0'>
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-600 border-t-transparent"></div>
        </div>

    )
}

export default Loading