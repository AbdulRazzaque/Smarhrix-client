import React, { useState } from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

const CoreHrList = ({handleOpen}) => {
  const [activeComponent, setActiveComponent] = useState('Award');
  const handleClick = (componentName) => {
    handleOpen(componentName);
    setActiveComponent(componentName);
  };
  return (
    <Box sx={{ width: '100%', maxWidth: 200, borderRadius:2}} className="bg-white">
      
    <nav aria-label="secondary mailbox folders">
      {/* <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={<Typography className='listitemtext'>Award</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Travel</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Training</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Ticket</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Promotion</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Complaint</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Warning</Typography>} />
          </ListItemButton>
        </ListItem>
      
      </List> */}
      <List>
  <ListItem disablePadding onClick={() => handleClick('Award')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Award' ? 'activeListItem' : 'listitemtext'}>Award</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Travel')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Travel' ? 'activeListItem' : 'listitemtext'}>Travel</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Training')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Training' ? 'activeListItem' : 'listitemtext'}>Training</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Ticket')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Ticket' ? 'activeListItem' : 'listitemtext'}>Ticket</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Promotion')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Promotion' ? 'activeListItem' : 'listitemtext'}>Promotion</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Complaints')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Complaints' ? 'activeListItem' : 'listitemtext'}>Complaint</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Warning')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Warning' ? 'activeListItem' : 'listitemtext'}>Warning</Typography>} />
    </ListItemButton>
  </ListItem>
</List>

    </nav>
  </Box>
 
  )
}

export default CoreHrList