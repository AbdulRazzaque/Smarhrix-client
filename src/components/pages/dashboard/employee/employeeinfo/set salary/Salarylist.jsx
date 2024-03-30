import React, { useState } from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

const Salarylist = ({handleOpen}) => {
    const [activeComponent, setActiveComponent] = useState('BasicSalary');
  // Function to handle opening the component and setting active component
  const handleClick = (componentName) => {
    handleOpen(componentName);
    setActiveComponent(componentName);
  };
  return (
    <Box sx={{ width: '100%', maxWidth: 200, borderRadius:2}} className="bg-white">
      
    <nav aria-label="secondary mailbox folders">
      <List>
        <ListItem disablePadding >
          <ListItemButton onClick={()=>handleClick('BasicSalary')}>
            <ListItemText primary={<Typography className={activeComponent === 'BasicSalary' ? 'activeListItem' : 'listitemtext'}>Basic Salary</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>handleClick('Allowances')}>
            <ListItemText primary={<Typography className={activeComponent === 'Allowances' ? 'activeListItem' : 'listitemtext'}>Allowances</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
        <ListItem disablePadding onClick={()=>handleClick('Commissions')}>
          <ListItemButton >
            <ListItemText primary={<Typography className={activeComponent === 'Commissions' ? 'activeListItem' : 'listitemtext'}>Commissions</Typography>} />
          </ListItemButton>
        </ListItem>
    <Divider />
    <ListItem disablePadding onClick={() => handleClick('Loan')}>
  <ListItemButton>
    <ListItemText primary={<Typography className={activeComponent === 'Loan' ? 'activeListItem' : 'listitemtext'}>Loan</Typography>} />
  </ListItemButton>
</ListItem>

    <Divider />
  <ListItem disablePadding onClick={() => handleClick('StatutoryDeductions')}>
  <ListItemButton>
    <ListItemText primary={<Typography className={activeComponent === 'StatutoryDeductions' ? 'activeListItem' : 'listitemtext'}>Statutory Deductions</Typography>} />
  </ListItemButton>
</ListItem>


   
    <Divider />
    <ListItem disablePadding onClick={() => handleClick('OtherPayments')}>
  <ListItemButton>
    <ListItemText primary={<Typography className={activeComponent === 'OtherPayments' ? 'activeListItem' : 'listitemtext'}>Other Payments</Typography>} />
  </ListItemButton>
</ListItem>
    <Divider />
    <ListItem disablePadding onClick={() => handleClick('Overtime')}>
  <ListItemButton>
    <ListItemText primary={<Typography className={activeComponent === 'Overtime' ? 'activeListItem' : 'listitemtext'}>Overtime </Typography>} />
  </ListItemButton>
</ListItem>
    <Divider />
    <ListItem disablePadding onClick={() => handleClick('SalaryPension')}>
  <ListItemButton>
    <ListItemText primary={<Typography className={activeComponent === 'SalaryPension' ? 'activeListItem' : 'listitemtext'}>Salary Pension</Typography>} />
  </ListItemButton>
</ListItem>

      
      </List>
    </nav>
  </Box>
 
  )
}

export default Salarylist