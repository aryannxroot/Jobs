import React, { useState, useEffect, createContext } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner';

import GoBack from '../components/GoBack';
import AboutJob from '../components/AboutJob';
import SideBar from '../components/SideBar';

//JobContext
import JobContext from '../context/JobContext';

const JobPage = ({deleteJob}) => {

  const { id } = useParams();
  const[job, setJob] = useState({});
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
        // console.log(data);
      } catch (error) {
        console.log('Error fetching data :', error);
      } finally {
        // console.log('finally fetch completed');
        setLoading(false);
      }
    }

    fetchJob();
  },[])

  return loading ? <Spinner /> : (
    <>
      <JobContext.Provider value={job}>
        <GoBack />
        <section className="bg-indigo-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <AboutJob />  
            <SideBar deleteJob={deleteJob} />
            </div>
          </div>
        </section>
      </JobContext.Provider>
    </>
  )
}



export default JobPage
