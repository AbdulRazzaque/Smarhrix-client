
import React, { Fragment } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Dashhead from './Dashhead';
// import Dashhead from '../../../Dashhead';
import Dashhead from '../../Dashhead';
// import Header from '../header/Header';
import Header from '../dashboard/header/Header';
import '../dashboard/dashboard.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Tabsection from './tabSection/Tabsection';
function Hrdetails() {
    const [display,setDisplay]=React.useState(false)
    const history= useHistory()


    
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={4} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className="container my-5">
      <p className='sidTitle'>Dashboard / <span>Core HR</span></p>
      <p className='sidTitle2'>CORE HR DETAILS</p>
    </div>

<Tabsection/>
    



             </div>
    </div>
    )
}

export default Hrdetails
