import React from 'react'
import CompanyInfo from './CompanyInfo'
import ManageJob from '../components/ManageJob'

const SideBar = ({deleteJob}) => {
  return (
    <aside>
        <CompanyInfo />
        <ManageJob deleteJob={deleteJob} />
    </aside>
  )
}

export default SideBar
