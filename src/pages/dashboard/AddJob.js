import React from 'react'
import { useSelector } from 'react-redux'
import { FormField, SectionWrapper } from '../../components'

const AddJob = () => {
    const { company,
        position,
        positionType,
        status,
        statusType } = useSelector(state => state.job)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target

    }
    return (
        <SectionWrapper title="Add Job">
            <form onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow-md rounded-lg mt-5">
                    <div className="px-4 py-5 bg-white sm:p-6">
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
                                    id="position"
                                    label="position"
                                    value={position}
                                    onChange={handleInputChange}
                                    name="position"
                                    type="text"
                                >
                                </FormField>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <FormField
                                    id="status"
                                    label="status"
                                    value={status}
                                    onChange={handleInputChange}
                                    name="status"
                                    type="text"
                                >
                                </FormField>
                            </div>

                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="button"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                clear
                            </button>

                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                submit
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </SectionWrapper>
    )
}

export default AddJob