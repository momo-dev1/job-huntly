import React, { useEffect } from 'react'
import { JobCard, SectionWrapper, Search } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getListingJobs } from '../../store/jobListingSlice'

const JobListing = () => {
    const { jobs, isLoading } = useSelector(state => state.jobListing)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListingJobs())

    }, [dispatch])


    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <SectionWrapper title="Job Listing">
            <Search />
            {jobs.length === 0
                ?
                <div>No jobs found</div>
                :
                jobs.map(job => <JobCard key={job._id} {...job} />)}
        </SectionWrapper>
    )
}

export default JobListing