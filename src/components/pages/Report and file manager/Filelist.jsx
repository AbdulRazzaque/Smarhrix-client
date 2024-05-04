import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Allfile from './FileTab/Allfile/Allfile';
import OfficalDocument from './FileTab/Offical Document/OfficalDocument';
import FileConfiguration from './FileTab/File Configuration/FileConfiguration';

const Filelist = () => {
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
    <div className="box">
      <Box sx={{ width: '100%', height: 50 }} className="bg-white my-2 mx-2">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className='tabs'
          variant="fullWidth" // Ensure all tabs take up the full width of the container
        >
          <Tab label="File Manager" {...a11yProps(0)} className='tab' />
          <Tab label="Official Document" {...a11yProps(1)} className='tab' />
          <Tab label="File configuration" {...a11yProps(2)} className='tab' />
        </Tabs>
      </Box>
      <div className='mt-1'>
        <CustomTabPanel value={value} index={0}>
          <Allfile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <OfficalDocument />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <FileConfiguration />
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default Filelist;
