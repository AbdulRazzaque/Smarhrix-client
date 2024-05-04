



// import Infolist from '../General/Generallist'
import React, { Fragment } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, InputLabel, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const FileConfiguration = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='bg-white p-4'>
                <div className="row">
    <div className="col-md-8  ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxtitle">All File</div>
       
      </div>
    </div>



        </div>
        <hr />
{/* ===================================================================================================================================================================== */}
        <div className=" my-5">
        <div className="row ">
            <div className="  col-md-12 col-sm-12 my-3">
            <InputLabel htmlFor="outlined-basic">Allowed Extension</InputLabel>
            <TextField
              id="outlined-basic"
         
              variant="outlined"
            className='searchinput'
            fullWidth
            //   required
              
            />
            </div>
            <div className="  col-md-12 col-sm-12 my-3">
            <InputLabel htmlFor="outlined-basic">Max File Size (In MB)</InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
            className='searchinput'
            fullWidth
            //   required
              
            />
            </div>
         
 
            </div>
        </div>
{/* ===================================================================================================================================================================== */}
<div className="">
        <Button variant="contained" style={{ fontSize: '14px',borderRadius: 50 , textTransform:'none'}}>
    Save Changes
    </Button>
    </div>

    {/* <AddPromotion
     open={open}
     handleClickOpen={handleClickOpen}
     handleClose={handleClose}
    /> */}
    </div>
  )
}

export default FileConfiguration