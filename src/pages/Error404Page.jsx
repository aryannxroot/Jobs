import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Error404Page = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96 mt-44" >
        <FaExclamationTriangle className='text-yellow-400 text-9xl fa-4x mb-4' />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
            to="/"
            className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
            >Go Back
        </Link>
    </section>
  )
}

export default Error404Page
