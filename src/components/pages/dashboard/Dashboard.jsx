import React from 'react'


import Chatrbar from './DashboardTabs/Chartbar'
import DashboardTask from './DashboardTabs/DashboardTask'
import DashbordTotalClient from './DashboardTabs/DashbordTotalClient'

const Dashboard = () => {
  return (
    <div>
        <DashbordTotalClient/>
        <Chatrbar/>
        <DashboardTask/>
    </div>
  )
}

export default Dashboard