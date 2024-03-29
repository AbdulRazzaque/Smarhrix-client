import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Promotion from './Promotion';
import Award from './Award';
import Travel from './Travel';
import Transfer from './Transfer';
import Resignations from './Resignations';
import Complaints from './Complaints';
import Warning from './Warning';
import Terminations from './Terminations';
const Tabsection = () => {
    //  =====================================logic==========================================================================
    const [display,setDisplay]=React.useState(false)
    const [value, setValue] = React.useState(0);
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
              <Box sx={{ }}>
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
    
        <div className="box">
<Box sx={{ width: '100%', height:50}} className="bg-white my-2 mx-2   ">
  <Box sx={{ borderBottom: 1,  borderColor: 'divider',}}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs'>
      <Tab label="Promotion" {...a11yProps(0)} className='tab'/>
      <Tab label="Award" {...a11yProps(1)} className='tab'/>
      <Tab label="Travel" {...a11yProps(2)} className='tab'/>
      <Tab label="Transfer" {...a11yProps(3)} className='tab'/>
      <Tab label="Resignations" {...a11yProps(4)} className='tab'/>
      <Tab label="Complaints" {...a11yProps(5)} className='tab'/>
      <Tab label="Warning" {...a11yProps(6)} className='tab'/>
      <Tab label="Terminations" {...a11yProps(6)} className='tab'/>
    </Tabs>
  </Box>
  </Box>
  <div className='mt-1'>


  <CustomTabPanel value={value} index={0}>
    <Promotion/>
  </CustomTabPanel>
  <CustomTabPanel value={value} index={1}>
    <Award/>
  </CustomTabPanel>
  <CustomTabPanel value={value} index={2}>
   <Travel/>
  </CustomTabPanel>
  <CustomTabPanel value={value} index={3}>
   <Transfer/>
  </CustomTabPanel>
  <CustomTabPanel value={value} index={4}>
   <Resignations/>
  </CustomTabPanel>
  <CustomTabPanel value={value} index={5}>
   <Complaints/>
  </CustomTabPanel>
  <CustomTabPanel value={value} index={6}>
   <Warning/>
  </CustomTabPanel>
  <CustomTabPanel value={value} index={7}>
   <Terminations/>
  </CustomTabPanel>
  </div>

</div>

  )
}

export default Tabsection




