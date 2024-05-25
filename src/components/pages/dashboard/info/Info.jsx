


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
import { useSelector } from 'react-redux';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: 1500, // Adjust the value to increase or decrease width
  },
}));

 const Info = ({openInfo,handleCloseInfo,columns})=> {
    const rowData = useSelector(state => state.socket.row.params)
    const filteredColumns = columns.filter(column => column.field !== 'id');
    console.log(rowData,'rowData')
  
// console.log(data)
  return (
    <React.Fragment>
 
      <BootstrapDialog
        onClose={handleCloseInfo}
        aria-labelledby="customized-dialog-title"
        open={openInfo}
      >

        <IconButton 
          aria-label="close"
          onClick={handleCloseInfo}
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
      
<div className='bg-white'>
      <p className='my-3 mx-3 py-2 boxtitle'>Company info</p>
      <hr className='mx-3' />
      <div className="row my-2">
        {filteredColumns.map((column, index) => (
          <div className="col-auto" key={index}>
            <div className="col-6 my-3 boxtextheading text-uppercase">{column.headerName}</div>
            <div className="col-6 my-3 boxtextcontent">{rowData[column.field]}</div>
          </div>
        ))}
      </div>
    </div>
        
        
        
 
      </BootstrapDialog>
    </React.Fragment>
  );
}
export default Info