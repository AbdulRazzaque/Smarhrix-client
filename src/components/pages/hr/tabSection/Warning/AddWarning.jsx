

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

 const AddWarning = ({open,handleClickOpen,handleClose})=> {
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
      
        <p className="whitboxtitle ml-4 my-4">Add Warning</p>
     
        <Divider/>
        <div className="container my-4">
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Company *</InputLabel>
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
                    renderInput={(params) => <TextField {...params} placeholder='Select Document Type' required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Warning To *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
               placeholder='Enter Document Number'
                required
                type="text"
                variant="outlined"
              />
            </div>
          </div>
          {/* ===================Second row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Warning Type *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
          
                type="text"
                variant="outlined"
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Subject *</InputLabel>
            <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
          
                type="text"
                variant="outlined"
              />
            </div>          
             
          </div>

          {/* ===================Thired row====================================================================================== */}

        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Description</InputLabel>
            <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              
          
                type="text"
                variant="outlined"
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">warning Date *</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // sx={{ width: 700 }}
            
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField name="date" {...params}   sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                          }} />
                  )}
                />
              </LocalizationProvider>
            </div>          

          </div>
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Status</InputLabel>
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
                    renderInput={(params) => <TextField {...params} placeholder='Select Deduction Option' required/>}
                    />
            </div>          
                   

          </div>
        
          {/* ===================Thired row====================================================================================== */}
        
          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Warning</Button>
            </div>
        
          </div>
        </div>
        
        
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default AddWarning