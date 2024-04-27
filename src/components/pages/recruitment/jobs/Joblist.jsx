

import React, { Fragment } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../../Dashhead';
import Header from '../../dashboard/header/Header';
import '../../dashboard/dashboard.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Badge, Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// import Attachments from './clientSection/Attachments';
import Attachments from '../clients/clientSection/Attachments';

// import Meetings from './clientSection/Meetings';
import Meetings from '../clients/clientSection/Meetings';
import JobDetails from './Jobsection/JobDetails';
import Jobdescription from './Jobsection/Jobdescription';
import AssociatesCandidates from './Jobsection/AssociatesCandidates';
import Notes from '../clients/clientSection/Notes';
const Joblist = () => {
    const [display, setDisplay] = React.useState(false)
    const [value, setValue] = React.useState(0);
    const history = useHistory()



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
        <div>
            <Box sx={{ width: '100%', height: 50 }} className="bg-white my-2 mx-2   ">
                <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs'>
                        <Tab p label="Details" {...a11yProps(0)} className='tab mx-3' />
                        <Tab label="Description" {...a11yProps(1)} className='tab  mx-3' />
                        <Tab
                            label={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>Attachments</span>
                                    <Badge badgeContent={0} color="error" style={{ marginLeft: '15px' }} />
                                </div>
                            }
                            {...a11yProps(2)}
                            className='tab  mx-3'
                        />
                      
                        <Tab
                            label={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>Associates Candidates</span>
                                    <Badge badgeContent={3} color="error" style={{ marginLeft: '15px' }} />
                                </div>
                            }
                            {...a11yProps(3)}
                            className='tab  mx-3'
                        />
                        <Tab
                            label={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>Meetings</span>
                                    <Badge badgeContent={1} color="error" style={{ marginLeft: '15px' }} />
                                </div>
                            }
                            {...a11yProps(4)}
                            className='tab  mx-3'
                        />
                        <Tab
                            label={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>Notes</span>
                                    <Badge badgeContent={5} color="error" style={{ marginLeft: '15px' }} />
                                </div>
                            }
                            {...a11yProps(6)}
                            className='tab  mx-3'
                        />
                    


                    </Tabs>
                </Box>
            </Box>
            <div className=' '>


                <CustomTabPanel value={value} index={0}>
                   <JobDetails/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                   <Jobdescription/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Attachments/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <AssociatesCandidates/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    <Meetings/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                    <Notes/>
                </CustomTabPanel>
            
               
            </div>
        </div>
    )
}

export default Joblist