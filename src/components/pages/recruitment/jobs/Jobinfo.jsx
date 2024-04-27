
import React, { Fragment } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../../Dashhead';
import Header from '../../dashboard/header/Header';
import '../../dashboard/dashboard.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import Joblist from './Joblist';
import Jobprofile from './Jobprofile';

function Jobinfo() {
//  =====================================state==========================================================================
    const [display,setDisplay]=React.useState(false)
    const [value, setValue] = React.useState(0);
    const history= useHistory()



//  =====================================logic==========================================================================

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };


      function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
 
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={9} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className="container my-5">
      <p className='sidTitle'>Dashboard /Client <span>Client01</span></p>
      <p className='sidTitle2'>CLIENT DETAILS</p>
    </div>
 
    <div className="box py-5">
       <div className="row">
        <div className="col-12 mt-5 ">

        <Jobprofile/>
        </div>
        <div className="col-12 mt-5">

    <Joblist/> 

        </div>
       </div>
    </div>
  



             </div>
    </div>
    )
}

export default Jobinfo

