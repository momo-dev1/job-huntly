import React from 'react'
import { Tag } from "./index"
import {
    LocationMarkerIcon,
    BriefcaseIcon,
    ClockIcon,
    CalendarIcon
} from '@heroicons/react/solid'
import moment from 'moment'

const JobCard = ({ status, company, position, jobLocation: location, createdAt, jobCounts }) => {

    const date = moment(createdAt).format("MMM Do, YYYY")
    const jobFound = jobCounts === 1 ? "Job Found" : "Jobs Found"

    return (
        <>
            <h5 className='text-lg font-semibold mt-5'>
                {jobCounts} {jobFound}
            </h5>
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
                        <ClockIcon className='h-6 w-6 text-gray-400' />
                        <h5 className='font-semibold'>{status}</h5>
                    </span>
                    <span className='flex items-center gap-2'>
                        <CalendarIcon className='h-6 w-6 text-gray-400' />
                        <h5 className='font-semibold'>{date}</h5>
                    </span>
                </div>
            </figure>
        </>
    )
}

export default JobCard