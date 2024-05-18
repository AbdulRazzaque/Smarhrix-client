// import React from 'react'

// const Companyinfo = () => {
//   return (
//     <div>Companyinfo</div>
//   )
// }

// export default Companyinfo



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
import { Autocomplete, Checkbox, Divider, InputLabel, TextField } from '@mui/material';
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

 const Companyinfo = ({open,data,handleClose})=> {
    const [selectedDate,setSelectedDate]=React.useState()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
console.log(data)
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
      
<div className=' bg-white'>
           <p className='my-3 mx-3 py-2 boxtitle'>Company info</p>
            <hr className='mx-3'/>
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">COMPANY NAME</div>
                  <div className="col my-3 boxtextcontent" >{data.company_name}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">registration</div>
                  <div className="col my-3 boxtextcontent" >{data.registration_number}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">website</div>
                  <div className="col my-3 boxtextcontent" >{data.website}</div>
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-3">
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">company type</div>
                  <div className="col my-3 boxtextcontent" >{data.company_type}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">phone number</div>
                  <div className="col my-3 boxtextcontent" >{data.phone_number}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">location</div>
                  <div className="col my-3 boxtextcontent" >{data.location}</div>
                </div>
               
            </div>
            {/* ============================================ */}
            <div className="row my-2">
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">treading name</div>
                  <div className="col my-3 boxtextcontent" >{data.treading_name}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">Email</div>
                  <div className="col my-3 boxtextcontent" >{data.email}</div>
                </div>
                <div className="col">
                  <div className="col my-3 boxtextheading text-uppercase">company_logo</div>
                  <div className="col my-3 boxtextcontent" >{data.company_logo}</div>
                </div>
               
            </div>
    </div>
        
        
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default Companyinfo