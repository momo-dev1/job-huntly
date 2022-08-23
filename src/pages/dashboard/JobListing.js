import React, { useEffect } from 'react'
import { JobCard, SectionWrapper, Search } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getListingJobs } from '../../store/jobListingSlice'
import Loading from '../../components/Loading'

const JobListing = () => {
    const { jobs, jobCounts, isLoading } = useSelector(state => state.jobListing)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListingJobs())

    }, [dispatch])

    return (
        <SectionWrapper title="Job Listing">
            <Search />
            {isLoading ?
                <Loading /> :
                jobs.length === 0
                    ?
                    <div>No jobs found</div>
                    :
                    jobs.map(job => <JobCard key={job._id} {...job} jobCounts={jobCounts} />)}
        </SectionWrapper>
    )
}

export default JobListing