import React from 'react'
import moment from 'moment'
import { Link } from "react-router-dom"
import { Tag } from "./index"
import { useDispatch } from 'react-redux'
import { showModal, updateJobs } from '../store/jobSlice'
import {
    ClockIcon,
    TrashIcon,
    PencilIcon,
    CalendarIcon,
    BriefcaseIcon,
    LocationMarkerIcon,
} from '@heroicons/react/solid'

const JobCard = ({ _id: id, status, company, position, jobLocation: location, createdAt, avatarColor }) => {
    const dispatch = useDispatch()
    const date = moment(createdAt).format("MMM Do, YYYY")

    return (
        <>
            <figure className='p-5 bg-white dark:bg-eerie-black shadow-md dark:shadow-xl rounded-lg max-w-2xl mb-5 mt-5'>
                <div className='flex items-center gap-y-6 justify-between flex-wrap '>
                    <div className='flex items-center gap-5 border-b border-b-slate-100 md:border-none w-full md:max-w-max py-3'>
                        <div style={{ backgroundColor: avatarColor }} className="flex-shrink-0 self-baseline h-12 w-12 font-semibold  flex items-center justify-center rounded-full text-white capitalize">{company.charAt(0)}</div>
                        <div>
                            <h3 className='text-lg md:text-xl dark:text-jet font-semibold capitalize'>{company}</h3>
                            <div className='flex gap-3 mt-2 text-sm font-semibold flex-wrap'>
                                <Tag title="3D Design" />
                                <Tag title="Blender" />
                                <Tag title="Figma" />

                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <button onClick={() => dispatch(showModal(id))} className='p-3 rounded-full border border-red-600'>
                            <TrashIcon className='h-4 w-4 text-red-600 ' />
                        </button>
                        <Link to="/add-job">
                            <button onClick={() => dispatch(updateJobs({ editId: id, company, position, location, status }))} className='p-3 rounded-full border border-blue-600'>
                                <PencilIcon className='h-4 w-4 text-blue-600 ' />
                            </button>
                        </Link>
                    </div>
                </div>
                <p className='mt-5 text-gray-400 font-semibold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni deleniti aspernatur dolorem aliquid repellat.
                    Aut ipsam minus doloremque ratione rerum.
                </p>
                <div className='mt-8 flex items-center justify-between flex-wrap gap-y-4'>
                    <span className='flex items-center gap-2'>
                        <BriefcaseIcon className='h-6 w-6 text-gray-400 dark:text-greyish' />
                        <h5 className='font-semibold dark:text-jet'>{position}</h5>
                    </span>
                    <span className='flex items-center gap-2'>
                        <LocationMarkerIcon className='h-6 w-6 text-gray-400 dark:text-greyish' />
                        <h5 className='font-semibold dark:text-jet'>{location}</h5>
                    </span>
                    <span className='flex items-center gap-2'>
                        <ClockIcon className='h-6 w-6 text-gray-400 dark:text-greyish' />
                        <h5 className='font-semibold dark:text-jet'>{status}</h5>
                    </span>
                    <span className='flex items-center gap-2'>
                        <CalendarIcon className='h-6 w-6 text-gray-400 dark:text-greyish' />
                        <h5 className='font-semibold dark:text-jet'>{date}</h5>
                    </span>
                </div>
            </figure>
        </>
    )
}

export default JobCard