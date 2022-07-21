import React from 'react'
import {
    LocationMarkerIcon,
    BriefcaseIcon,
    UserCircleIcon,
    PlusCircleIcon,
    XIcon,
} from '@heroicons/react/solid'


const JobItem = () => {
    const company = 'Visual Designer'
    return (
        <figure className='p-5 bg-white w-[600px] shadow-md rounded-lg'>
            <div className='flex items-center'>
                <div className='h-12 w-12 font-semibold bg-green-600 flex items-center justify-center rounded-full text-white capitalize'>{company.slice(0, 1)}</div>

            </div>
            <p className='mt-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magni deleniti aspernatur dolorem aliquid repellat.
                Aut ipsam minus doloremque ratione rerum.
            </p>
            <div className='mt-10'>
                <span className='flex items-center gap-2'>
                    <BriefcaseIcon />
                    <h5>Full time</h5>
                </span>
                <span className='flex items-center gap-2'>
                    <LocationMarkerIcon />
                    <h5>Alexandria</h5>
                </span>
                <span className='flex items-center gap-2'>
                    <h5>Alexandria</h5>
                </span>
                <span className='flex items-center gap-2'>
                    <h5>Alexandria</h5>
                </span>
            </div>
        </figure>
    )
}

export default JobItem