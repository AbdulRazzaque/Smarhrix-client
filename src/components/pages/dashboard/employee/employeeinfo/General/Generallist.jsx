import React, { useState } from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

const Generallist = ({handleOpen}) => {
  const [activeComponent, setActiveComponent] = useState('Basic');
  const handleClick = (componentName) => {
    handleOpen(componentName);
    setActiveComponent(componentName);
  };
  return (
    <Box sx={{ width: '100%', maxWidth: 200, borderRadius:2}} className="bg-white">
      
    <nav aria-label="secondary mailbox folders">

      <List>
  <ListItem disablePadding onClick={() => handleClick('Basic')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Basic' ? 'activeListItem' : 'listitemtext'}>Basic</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Immigration')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Immigration' ? 'activeListItem' : 'listitemtext'}>Immigration</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('EmergencyContact')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'EmergencyContact' ? 'activeListItem' : 'listitemtext'}>Emergency Contact</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Socialprofile')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Socialprofile' ? 'activeListItem' : 'listitemtext'}>Social Profile</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Document')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Document' ? 'activeListItem' : 'listitemtext'}>Document</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Qualification')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Qualification' ? 'activeListItem' : 'listitemtext'}>Qualification</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('Workexperience')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'Workexperience' ? 'activeListItem' : 'listitemtext'}>Work Experience</Typography>} />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem disablePadding onClick={() => handleClick('BankAccount')}>
    <ListItemButton>
      <ListItemText primary={<Typography className={activeComponent === 'BankAccount' ? 'activeListItem' : 'listitemtext'}>Bank Account</Typography>} />
    </ListItemButton>
  </ListItem>
</List>

    </nav>
  </Box>
 
  )
}

export default Generallist