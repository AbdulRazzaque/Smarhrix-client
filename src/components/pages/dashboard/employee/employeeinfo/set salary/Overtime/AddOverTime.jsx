

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

 const AddOverTime= ({open,handleClickOpen,handleClose})=> {
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
      
        <p className="whitboxtitle ml-4 my-4">Add Overtime</p>
     
        <Divider/>
        <div className="container my-4">
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Month - Year *</InputLabel>

            <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="Month - Year"
                required
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Title*</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
                placeholder="Enter Title"
                required
                type="number"
                variant="outlined"
              />
            </div>
          </div>
          {/* ===================Second row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Number of Days *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
           placeholder='Number'
                type="number"
                variant="outlined"
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Total Hours *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
           placeholder='Enter Total Number of Hours'
                type="number"
                variant="outlined"
              />
            </div>          
             
          </div>

          {/* ===================Thired row====================================================================================== */}

        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Rate  *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
           placeholder='Rate'
                type="text"
                variant="outlined"
              />
            </div>          
                  
             
          </div>
        
          {/* ===================Thired row====================================================================================== */}
        
          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Overtime</Button>
            </div>
        
          </div>
        </div>
        
        
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default AddOverTime