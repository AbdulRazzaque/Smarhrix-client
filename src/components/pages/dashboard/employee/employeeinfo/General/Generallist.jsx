import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

const Generallist = ({handelOpen}) => {
  
  return (
    <Box sx={{ width: '100%', maxWidth: 200, borderRadius:2}} className="bg-white">
      
    <nav aria-label="secondary mailbox folders">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handelOpen('Basic')}>
            <ListItemText primary={<Typography className='listitemtext'>Basic</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handelOpen('Immigration')}>
            <ListItemText primary={<Typography className='listitemtext'>Immigration</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handelOpen('EmergencyContact')}>
            <ListItemText primary={<Typography className='listitemtext'>Emergency Contact</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handelOpen('Socialprofile')}>
            <ListItemText primary={<Typography className='listitemtext'>Social Profile</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handelOpen('Document')}>
            <ListItemText primary={<Typography className='listitemtext'>Document</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handelOpen('Qualification')}>
            <ListItemText primary={<Typography className='listitemtext'>Qualification</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handelOpen('Workexperience')}>
            <ListItemText primary={<Typography className='listitemtext'>Work Experience</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handelOpen('BankAccount')} >
            <ListItemText primary={<Typography className='listitemtext'>Bank Account</Typography>} />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  </Box>
 
  )
}

export default Generallist