import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormField from './FormField'
import FormSelect from './FormSelect'
import { setSelection, clearFilters } from "../store/jobListingSlice"

const Search = () => {
    const { isLoading, search, searchStatus, searchType, sortBy, sortOptions } = useSelector(state => state.jobListing)
    const { positionType, statusType } = useSelector(state => state.job)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(clearFilters())
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        dispatch(setSelection({ name, value }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="overflow-hidden shadow-md rounded-lg mt-5">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className='col-span-6 sm:col-span-3 '>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="md:col-span-1 col-span-2">
                                    <FormField
                                        id="search"
                                        label="search"
                                        value={search}
                                        onChange={handleInputChange}
                                        name="search"
                                        type="text"
                                    >
                                    </FormField>
                                </div>

                                <div className="md:col-span-1 col-span-2">
                                    <FormSelect
                                        id="search Type"
                                        label="search Type"
                                        value={searchType}
                                        list={["all", ...positionType]}
                                        onChange={handleInputChange}
                                        name="searchType"
                                    >
                                    </FormSelect>
                                </div>

                            </div>
                        </div>

                        <div className='col-span-6 sm:col-span-3 '>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className="md:col-span-1 col-span-2">
                                    <FormSelect
                                        id="status Type"
                                        label="status Type"
                                        value={searchStatus}
                                        list={["all", ...statusType]}
                                        onChange={handleInputChange}
                                        name="searchStatus"
                                    >
                                    </FormSelect>
                                </div>

                                <div className="md:col-span-1 col-span-2">
                                    <FormSelect
                                        id="sort"
                                        label="sort"
                                        value={sortBy}
                                        list={sortOptions}
                                        onChange={handleInputChange}
                                        name="sortBy"
                                    >
                                    </FormSelect>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex items-center gap-2 m-4 justify-end'>
                    <div className="bg-gray-50 text-right">
                        <button
                            onClick={() => console.log("clear filters")}
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            clear Filters
                        </button>

                    </div>
                </div>

            </div>
        </form>

    )
}

export default Search