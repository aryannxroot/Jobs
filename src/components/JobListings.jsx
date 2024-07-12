import React from 'react'
import jobs from '../../src/jobs.json'
import JobListing from './JobListing';
import { Link } from 'react-router-dom'

const JobListings = ({isHome=true}) => {
    const  recentJobs = isHome ? jobs.slice(0, 3) : jobs;
    
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
          <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
              {isHome ? 'Recent' : 'Browse'} Jobs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentJobs.map((job) => (
                    <JobListing key={job.id} job={job} />
                  ))}
            </div>
          </div>
        </section>
        {
          isHome 
          ? null
          :
          <section className="m-auto max-w-lg my-10 px-6">
            <Link
            to='/'
            className="block  bg-indigo-700 hover:bg-black rounded-xl text-white text-center py-4 px-2">
                Go Back Home
            </Link>
        </section>}
    </>
  )
}

export default JobListings
