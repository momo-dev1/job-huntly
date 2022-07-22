import React from 'react'

const Tag = ({ title }) => {
    return (
        <span className='flex-shrink-0 text-xs sm:text-base text-[#180ad99f] bg-[#2538c62c] px-2 py-1 rounded-[100vw]'>
            {title}
        </span>
    )
}

export default Tag