import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card title="For Developers" subTitle="Find the perfect job for your and start your career today" btnText="Browser Jobs"/>
            <Card bgCol="bg-indigo-100" title="For Employers" subTitle="List your job to find the perfect developer for the role" btnText="Add Job"/>
          </div>
        </div>
      </section>
  )
}

export default HomeCards
