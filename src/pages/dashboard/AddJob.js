import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { FormField, SectionWrapper, FormSelect, MultiSelect } from '../../components'
import { setSelection, clearValues, createJob, updateJob } from '../../store/jobSlice'


const AddJob = () => {
    const {
        isEdit,
        skills,
        status,
        editId,
        company,
        location,
        position,
        statusType,
        positionType
    } = useSelector(state => state.job)
    const dispatch = useDispatch()
    const [value, setValue] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEdit) {
            //@Todo => adding {jobLocation,position} to updateJob
            dispatch(updateJob({ jobId: editId, job: { company, status } }))
            return
        }
        if (skills.length === 0) {
            toast.error("Please add skills")
            return
        }
        dispatch(createJob({ company, jobLocation: location, position, status, skills }))
    }

    const handleClearValues = () => {
        dispatch(clearValues())
        setValue([])
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        dispatch(setSelection({ name, value }))
    }
    return (
        <SectionWrapper title={`${ isEdit ? "Edit Job" : "Add Job" }`}>
            <form onSubmit={handleSubmit}>
                <div className="mt-5 rounded-lg shadow-md dark:shadow-xl">
                    <div className="px-4 py-5 bg-white dark:bg-eerie-black sm:p-6">
                        <div className="grid grid-cols-6 gap-6">

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="company"
                                    label="company"
                                    value={company}
                                    onChange={handleInputChange}
                                    name="company"
                                    type="text"
                                >
                                </FormField>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="location"
                                    label="job location"
                                    value={location}
                                    onChange={handleInputChange}
                                    name="location"
                                    type="text"
                                >
                                </FormField>
                            </div>

                            <div className='col-span-6 sm:col-span-3 '>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="col-span-1">
                                        <FormSelect
                                            id="status"
                                            label="status Type"
                                            value={status}
                                            list={statusType}
                                            onChange={handleInputChange}
                                            name="status"
                                        >
                                        </FormSelect>
                                    </div>

                                    <div className="col-span-1">
                                        <FormSelect
                                            id="position"
                                            label="position Type"
                                            value={position}
                                            list={positionType}
                                            onChange={handleInputChange}
                                            name="position"
                                        >
                                        </FormSelect>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-6 md:col-span-3 ">
                                <h3 className="block text-sm font-medium text-gray-600 capitalize dark:text-jet mb-1">Skills</h3>
                                <MultiSelect value={value} setValue={setValue} />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-end gap-2 p-4 dark:bg-eerie-black/40'>
                        <div>
                            <button
                                onClick={handleClearValues}
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Clear
                            </button>

                        </div>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex justify-center px-6 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cornflower-300 hover:bg-cornflower-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </SectionWrapper>
    )
}

export default AddJob