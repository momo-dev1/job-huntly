import React, { useEffect, useState } from 'react'
import { JobCard, SectionWrapper, Search, Pagination } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getListingJobs } from '../../store/jobListingSlice'
import Loading from '../../components/Loading'

const JobListing = () => {
    const { jobs, jobCounts, isLoading, currentPage, searchStatus, searchType, sortBy, search } = useSelector(state => state.jobListing)
    const [debounceSearch, setDebounceSearch] = useState(search)
    const dispatch = useDispatch()
    const jobFound = jobCounts === 1 ? "Job Found" : "Jobs Found"

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceSearch(search)
        }, 1200)
        return () => clearTimeout(timer)
    }, [search])

    useEffect(() => {
        dispatch(getListingJobs())
    }, [currentPage, searchStatus, searchType, sortBy, debounceSearch, dispatch])

    return (
        <SectionWrapper title="Job Listing">
            <Search />
            <section className='relative '>
                {isLoading ?
                    <Loading /> :
                    jobs.length === 0
                        ?
                        <div className='mt-6 text-2xl dark:text-jet'>No jobs found</div>
                        :
                        <>
                            <h5 className='mt-5 text-lg font-semibold md:text-xl dark:text-jet'>
                                {jobCounts} {jobFound}
                            </h5>
                            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                                {jobs.map(job => <JobCard key={job._id} {...job} jobCounts={jobCounts} />
                                )}
                            </div>
                            <Pagination />
                        </>
                }
            </section>

        </SectionWrapper>
    )
}

export default JobListing