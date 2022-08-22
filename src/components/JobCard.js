import React from 'react'
import { Tag } from "./index"
import {
    LocationMarkerIcon,
    BriefcaseIcon,
    UserIcon,
    ClockIcon,
} from '@heroicons/react/solid'

const JobItem = ({ status, company, position, jobLocation: location }) => {

    return (

        <figure className='p-5 bg-white shadow-md rounded-lg max-w-2xl mb-5 mt-5'>
            <div className='flex items-center gap-5'>
                <div className='flex-shrink-0 h-12 w-12 font-semibold bg-green-600 flex items-center justify-center rounded-full text-white capitalize'>{company.charAt(0)}</div>
                <div>
                    <h3 className='text-lg font-semibold'>{company}</h3>
                    <div className='flex gap-3 mt-2 text-sm font-semibold flex-wrap'>
                        <Tag title="3D Design" />
                        <Tag title="Blender" />
                        <Tag title="Figma" />
                    </div>
                </div>

            </div>
            <p className='mt-5 text-gray-400 font-semibold'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magni deleniti aspernatur dolorem aliquid repellat.
                Aut ipsam minus doloremque ratione rerum.
            </p>
            <div className='mt-8 flex items-center justify-between flex-wrap gap-y-4'>
                <span className='flex items-center gap-2'>
                    <BriefcaseIcon className='h-6 w-6 text-gray-400' />
                    <h5 className='font-semibold'>{position}</h5>
                </span>
                <span className='flex items-center gap-2'>
                    <LocationMarkerIcon className='h-6 w-6 text-gray-400' />
                    <h5 className='font-semibold'>{location}</h5>
                </span>
                <span className='flex items-center gap-2'>
                    <UserIcon className='h-6 w-6 text-gray-400' />
                    <h5 className='font-semibold'>74 applied</h5>
                </span>
                <span className='flex items-center gap-2'>
                    <ClockIcon className='h-6 w-6 text-gray-400' />
                    <h5 className='font-semibold'>{status}</h5>
                </span>
            </div>
        </figure>
    )
}

export default JobItem