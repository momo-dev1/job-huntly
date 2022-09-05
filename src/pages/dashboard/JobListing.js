import React, { useEffect } from 'react'
import { JobCard, SectionWrapper, Search, Pagination } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getListingJobs } from '../../store/jobListingSlice'
import Loading from '../../components/Loading'

const JobListing = () => {
    const { jobs, jobCounts, isLoading, currentPage, searchStatus, searchType, sortBy, search } = useSelector(state => state.jobListing)

    const dispatch = useDispatch()
    const jobFound = jobCounts === 1 ? "Job Found" : "Jobs Found"

    useEffect(() => {
        dispatch(getListingJobs())
    }, [currentPage, searchStatus, searchType, sortBy, search, dispatch])


    return (
        <SectionWrapper title="Job Listing">
            <Search />
            {isLoading ?
                <Loading /> :
                jobs.length === 0
                    ?
                    <div className='mt-6 text-2xl'>No jobs found</div>
                    :
                    <>
                        <h5 className='text-lg font-semibold mt-5'>
                            {jobCounts} {jobFound}
                        </h5>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            {jobs.map(job => <JobCard key={job._id} {...job} jobCounts={jobCounts} />
                            )}
                        </div>
                        <Pagination />
                    </>
            }
        </SectionWrapper>
    )
}

export default JobListing