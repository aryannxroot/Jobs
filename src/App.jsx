import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layouts
import MainLayout from './pages/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import Error404Page from './pages/Error404Page'
import AddJobPage from './pages/AddJobPage'
import JobPage from './pages/JobPage'
import EditJobPage from './pages/EditJobPage'



const App = () => {

  // Add new Job

  const  addJob = async (newJob) => {
    const res = await fetch ('/api/jobs', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json', 
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete job

  const deleteJob =  async (id) => {

    const res = await fetch (`/api/jobs/${id}`, {
      method : 'DELETE',
    });
    console.log('deleted',id);
    return;

  }
  
  //Edit job 

  const editJob = async (alterJob) => {

    const res = await fetch (`/api/jobs/${alterJob.id}`, {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json', 
      },
      body: JSON.stringify(alterJob),
    });

  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='add-job' element={<AddJobPage addJobSubmit={addJob} />}  />
            <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} />
            <Route path='/jobs/edit/:id' element={<EditJobPage editJob={editJob}/>} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
