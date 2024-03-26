import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

const CoreHrList = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 200, borderRadius:2}} className="bg-white">
      
    <nav aria-label="secondary mailbox folders">
      <List>
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
      
      </List>
    </nav>
  </Box>
 
  )
}

export default CoreHrList