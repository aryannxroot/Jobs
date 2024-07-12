import React from 'react'
import JobListings from '../components/JobListings'
import SearchJobs from '../components/SearchJobs'

const JobsPage = () => {
  return (
    <>
    <SearchJobs />
    <JobListings isHome={false}/>
    </>
  )
}

export default JobsPage
