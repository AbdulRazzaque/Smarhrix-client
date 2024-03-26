
import React, { Fragment } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../../../Dashhead';
import Header from '../../header/Header';
import '../../../dashboard/dashboard.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './employeeinfo.scss'
import General from './General/General';
import Profile from './profile/Profile';
import Setsalary from './set salary/Setsalary';
import Leave from './leave/Leave';
import CoreHr from './coreHr/CoreHr';
import Payslip from './Payslip/Payslip';
import Remainingleave from './RemainingLeave/Remainingleave';
function Employeeinfo() {
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
            <Dashhead id={3} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className="container my-5">
      <p className='sidTitle'>Dashboard / <span>Employee</span></p>
      <p className='sidTitle2'>ALL EMPLOYEES</p>
    </div>

    <div className="box">
    <Box sx={{ width: '100%', height:50}} className="bg-white my-2 mx-2   ">
      <Box sx={{ borderBottom: 1,  borderColor: 'divider',}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs'>
          <Tab label="General" {...a11yProps(0)} className='tab'/>
          <Tab label="Profile" {...a11yProps(1)} className='tab'/>
          <Tab label="Set salary" {...a11yProps(2)} className='tab'/>
          <Tab label="Leave" {...a11yProps(3)} className='tab'/>
          <Tab label="Core HR" {...a11yProps(4)} className='tab'/>
          <Tab label="Payslip" {...a11yProps(5)} className='tab'/>
          <Tab label="Remaining Leave" {...a11yProps(6)} className='tab'/>
        </Tabs>
      </Box>
      </Box>
      <div className='mt-5 '>


      <CustomTabPanel value={value} index={0}>
        <General/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Profile/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <Setsalary/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       <Leave/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       <CoreHr/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
       <Payslip/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
       <Remainingleave/>
      </CustomTabPanel>
      </div>
   
    </div>
  



             </div>
    </div>
    )
}

export default Employeeinfo

