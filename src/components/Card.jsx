import React from 'react'

const Card = ({bgCol='bg-gray-100', title, subTitle, btnText}) => {
  return (
    <div className={` ${bgCol} p-6 rounded-lg shadow-md `}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">
            {subTitle}
        </p>
        <a
            href="/jobs.html"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
            {btnText}
        </a>
    </div>
  )
}

export default Card
