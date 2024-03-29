import React from 'react'
import TotalClient from './DashboardTabs/TotalClient'
import Chatrbar from './DashboardTabs/Chartbar'
import DashboardTask from './DashboardTabs/DashboardTask'

const Dashboard = () => {
  return (
    <div>
        <TotalClient/>
        <Chatrbar/>
        <DashboardTask/>
    </div>
  )
}

export default Dashboard