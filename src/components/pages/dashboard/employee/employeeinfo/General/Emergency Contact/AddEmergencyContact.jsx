

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Autocomplete, Divider, InputLabel, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: 1200, // Adjust the value to increase or decrease width
  },
}));

 const AddEmergencyContact= ({open,handleClickOpen,handleClose})=> {
    const [selectedDate,setSelectedDate]=React.useState()

    const department =[
        {name:'GENETIC'},
        {name:"MICROBIOLOGY"},
        {name:"HEAMOTOLGY"},
        {name:"BIOCHEMISTRY"},
        {name:"HPLC"},
        {name:"AAS"},
        {name:"PARASITOLOGY"},
        {name:"GENERAL"},
           
        
      ]

  return (
    <React.Fragment>
 
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <IconButton 
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon  />
        </IconButton >
    
{/* ===================================================================================================================================================================== */}
      
        <p className="whitboxtitle ml-4 my-4">Add Contact</p>
     
        <Divider/>
        <div className="container my-4">
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Relation *</InputLabel>

            <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Relation' required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Email *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="Email"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>
          {/* ===================Second row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Name*</InputLabel>

            <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="Name"
                required
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Phone Number* </InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="Phone Number"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>
          {/* ===================Thired row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic">Address *</InputLabel>

            <TextField
                id="outlined-basic"
                fullWidth
                placeholder="Address"
                required
                type="number"
                variant="outlined"
                
              />
            </div>          
             
          </div>
          {/* ===================Thired row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">City *</InputLabel>

            <TextField
                id="outlined-basic"
                
                placeholder="Enter City Name"
                required
                type="text"
                sx={{ 
                    width:'100%',   maxWidth: '500Px' 
                    }}
                variant="outlined"
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">State *</InputLabel>

            <TextField
                id="outlined-basic"
                
                placeholder="Enter State Name"
                required
                type="text"
                sx={{ 
                    width:'100%',   maxWidth: '500Px' 
                      }}
                variant="outlined"
              />
            </div>          
             
          </div>
          {/* ===================Thired row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Zip Code *</InputLabel>

            <TextField
                id="outlined-basic"
               
                placeholder="Enter Zip Code "
                required
                sx={{ 
                    width:'100%',   maxWidth: '500Px' 
                      }}
                type="text"
                variant="outlined"
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Country *</InputLabel>

            <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                
                    renderInput={(params) => <TextField {...params} placeholder='Select Relation'  sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                          }} required/>}
                    />
            </div>          
             
          </div>
          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Contact</Button>
            </div>
        
          </div>
        </div>
        
        
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default AddEmergencyContact