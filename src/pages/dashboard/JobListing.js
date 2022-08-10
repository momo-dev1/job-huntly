import React from 'react'
import { JobCard, SectionWrapper, Search } from '../../components'

const JobListing = () => {

    return (
        <SectionWrapper title="Job Listing">
            <Search />
            <JobCard />
        </SectionWrapper>
    )
}

export default JobListing