import React from 'react'
import "./Home.scss"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from './Dashhead';
import Header from './pages/dashboard/header/Header';
import Dashboard from './Dashboard/Dashboard';
function Home() {
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


             <Header/>

             <div className=" my-5">

                <p className='sidTitle2'>DASHBORAD</p>
                <hr className='mx-3' />
                <Dashboard/>
                {/*=========================================Content start Here==================================================================================== */}
    </div>

             </div>
    </div>
    )
}

export default Home
