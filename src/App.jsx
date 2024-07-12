import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layouts
import MainLayout from './pages/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import Error404Page from './pages/Error404Page'
import AddJobPage from './pages/AddJobPage'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='add-job' element={<AddJobPage />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
