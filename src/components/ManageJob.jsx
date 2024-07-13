import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import JobContext from '../context/JobContext'

const ManageJob = ({deleteJob}) => {
  const job = useContext(JobContext);
  const navigate = useNavigate();

  const deleteLink = (jobId) => {

    const confirm = window.confirm("Are you sure you want to delete this job?");
    if(!confirm) return;
    deleteJob(jobId);
    toast.success('Job deleted Successfully');
    return navigate('/jobs');
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-bold mb-6">Manage Job</h3>
        <Link
        to={`/jobs/edit/${job.id}`}
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >Edit Job</Link>
        <button onClick={() => deleteLink(job.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
        Delete Job
        </button>
    </div>
)
}

export default ManageJob
