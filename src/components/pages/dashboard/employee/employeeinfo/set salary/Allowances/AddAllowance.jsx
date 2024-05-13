
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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
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

 const AddAllowance= ({open,handleClickOpen,handleClose})=> {
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
      
        <p className="whitboxtitle ml-4 my-4">Add Allowance</p>
     
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
              <InputLabel htmlFor="outlined-basic">Allowance Type *</InputLabel>
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
                    renderInput={(params) => <TextField {...params} placeholder='Select Allowance Type' required/>}
                    />
         
            </div>
          </div>
          {/* ===================Second row====================================================================================== */}
        <div className="d-flex align-items-center my-3">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Allowance Title *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              placeholder='Allowance Title '
           
                type="number"
                variant="outlined"
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Allowance Amount *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ 
                width:'100%',   maxWidth: '500Px' 
                  }}
              placeholder='$ 0.00'
           
                type="number"
                variant="outlined"
              />
            </div>          
             
          </div>
          {/* ===================Thired row====================================================================================== */}
        
          {/* ===================Thired row====================================================================================== */}
        
          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Allowance</Button>
            </div>
        
          </div>
        </div>
        
        
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default AddAllowance