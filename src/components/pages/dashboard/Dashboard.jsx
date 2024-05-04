


import React from 'react'
// import "./Home.scss"
import Header from './header/Header';
import '../../../components/Home.scss'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Chatrbar from './DashboardTabs/Chartbar'
import DashboardTask from './DashboardTabs/DashboardTask'
import DashbordTotalClient from './DashboardTabs/DashbordTotalClient'
import Dashhead from '../../Dashhead';
function Dashboard() {
    const [display,setDisplay]=React.useState(false)

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={1} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>


             <div>
             <Header/>
                <div className="container-fluid my-5">
   
      <p className='sidTitle2'>DASHBOARD</p>
    </div>
        <DashbordTotalClient/>
        <Chatrbar/>
        <DashboardTask/>
    </div>



             </div>
    </div>
    )
}

export default Dashboard
