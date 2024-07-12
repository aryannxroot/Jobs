import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layouts
import MainLayout from './pages/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
