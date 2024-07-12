import React from 'react'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {

  const { id } = useParams();
  const [job, setJob] = useEffect(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();

        setJob(data);
        console.log(job);
      } catch (error) {
        console.log(`Error while fetching job ${id}: `, error);
      } finally {
        setLoading(false);
        console.log('fetching is over');
      }
    };

    fetchJob();
  }, [])

  return loading ? <Spinner  /> : (
    <h1>
      {job.title}
    </h1>
  )
}



export default JobPage
