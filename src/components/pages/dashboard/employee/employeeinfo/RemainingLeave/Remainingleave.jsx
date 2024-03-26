import Infolist from '../General/Generallist'
import React, { Fragment } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
const Remainingleave = () => {
    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'LeaveType', headerName: 'Leave Type', width: 150 },
        { field: 'AllocateDay', headerName: 'Allocate Day', width: 150 },
        { field: 'Remaining', headerName: 'Remaining', width: 150 },
        
       
        //   {
        //     title: "Action",
        //     field: "Action",
        //     width: 180,
        //     renderCell: () => (
        //       <Fragment>
        //         {/* <Button color="error" onClick={() => setAlert(true)}> */}
        //         <Button sx={{color:"black"}}>
        //           <VisibilityIcon />
        //         </Button>
        //         <Button color="primary" >
        //           <DownloadIcon />
        //         </Button>
        //         {/* <Button color="error" >
        //           <DeleteIcon />
                  
        //         </Button> */}
        //       </Fragment>
        //     ),
        //   },

    ];
    
      const rows = [
        { id: 1, LeaveType: 'Annual', AllocateDay: 20, Remaining: 15, NetSalary: 5000 },
        { id: 2, LeaveType: 'Sick', AllocateDay: 10, Remaining: 7, NetSalary: 4800 },
        { id: 3, LeaveType: 'Maternity', AllocateDay: 90, Remaining: 45, NetSalary: 5500 },
        { id: 5, LeaveType: 'Annual', AllocateDay: 20, Remaining: 8, NetSalary: 5100 },
        { id: 6, LeaveType: 'Sick', AllocateDay: 10, Remaining: 4, NetSalary: 4900 },
        { id: 7, LeaveType: 'Maternity', AllocateDay: 90, Remaining: 60, NetSalary: 5600 },
        { id: 9, LeaveType: 'Annual', AllocateDay: 20, Remaining: 10, NetSalary: 5200 },
        { id: 10, LeaveType: 'Sick', AllocateDay: 10, Remaining: 6, NetSalary: 4950 }
        
      ]
  return (
    <div className='bg-white'>
                <div className="row">
    <div className="col-md-8  ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxtitle">Remaining leave Info</div>
       
      </div>
    </div>
    <div className="">
      
  
    </div>


        </div>
        <hr />
{/* ===================================================================================================================================================================== */}
        <div className="d-flex justify-content-center my-5">
        <div className="row ">
            <div className="col-xl-5  col-md-12 col-sm-12">
            <TextField
              id="outlined-basic"
              label="Search Clients..."
              variant="outlined"
            className='searchinput'
            InputProps={{ sx: { borderRadius: 10, backgroundColor:"white" ,height:50} }}
            //   required
              
            />
            </div>
            <div className='col-xl-2 col-md-12 col-sm-12 mt-2'>
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF',}}
            >search</Button>
            </div>
            <div className="col-xl-4 mt-2 col-md-12 col-sm-12">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF', }}
            >apply search button</Button>
            </div>
            </div>
        </div>
{/* ===================================================================================================================================================================== */}

<Box sx={{ height: 400, width: '100%', backgroundColor:'white' }} className='my-5'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  )
}

export default Remainingleave