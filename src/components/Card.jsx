import React from 'react'

const Card = ({bgCol='bg-gray-100',children}) => {
  return (
    <div className={` ${bgCol} p-6 rounded-lg shadow-md `}>
        {children}
    </div>
  )
}

export default Card
