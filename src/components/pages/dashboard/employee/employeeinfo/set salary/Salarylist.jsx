import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

const Salarylist = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 200, borderRadius:2}} className="bg-white">
      
    <nav aria-label="secondary mailbox folders">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={<Typography className='listitemtext'>Basic Salary</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Allowances</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Commissions</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Loan</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Statutory Deductions</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Other Payments</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Overtime</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemText primary={<Typography className='listitemtext'>Salary Pension</Typography>} />
          </ListItemButton>
        </ListItem>
      
      </List>
    </nav>
  </Box>
 
  )
}

export default Salarylist