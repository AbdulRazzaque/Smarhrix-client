import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import './employeeinfo.scss'
import Basic from './Basic'
const General = () => {
  return (
    <div>
        <div className="row">
            <div className="col-3">
            <Box sx={{ width: '100%', maxWidth: 200, borderRadius:2}} className="bg-white">
      
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={<Typography className='listitemtext'>Basic</Typography>} />
            </ListItemButton>
          </ListItem>
      <Divider />
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText primary={<Typography className='listitemtext'>Immigration</Typography>} />
            </ListItemButton>
          </ListItem>
      <Divider />
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText primary={<Typography className='listitemtext'>Emergency Contact</Typography>} />
            </ListItemButton>
          </ListItem>
      <Divider />
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText primary={<Typography className='listitemtext'>Social Profile</Typography>} />
            </ListItemButton>
          </ListItem>
      <Divider />
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText primary={<Typography className='listitemtext'>Document</Typography>} />
            </ListItemButton>
          </ListItem>
      <Divider />
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText primary={<Typography className='listitemtext'>Qualification</Typography>} />
            </ListItemButton>
          </ListItem>
      <Divider />
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText primary={<Typography className='listitemtext'>Work Experience</Typography>} />
            </ListItemButton>
          </ListItem>
      <Divider />
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText primary={<Typography className='listitemtext'>Bank Account</Typography>} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
            </div>



            <div className="col-9">
                <Basic/>
            </div>
     
        </div>
        
    </div>
  )
}

export default General