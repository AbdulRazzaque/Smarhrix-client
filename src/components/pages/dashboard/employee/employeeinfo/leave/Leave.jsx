import Infolist from '../General/Generallist'
import React, { Fragment } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const Leave = () => {
    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'LeaveType', headerName: 'LeaveType', width: 150 },
        { field: 'Reason', headerName: 'Reason', width: 150 },
        { field: 'Status', headerName: 'Status', width: 150 },
        { field: 'Duration', headerName: 'Duration', width: 150 },
        { field: 'Department', headerName: 'Department', width: 150 },

       
        //   {
        //     title: "Action",
        //     field: "Action",
        //     width: 180,
        //     renderCell: () => (
        //       <Fragment>
        //         {/* <Button color="error" onClick={() => setAlert(true)}> */}
        //         <Button color="primary">
        //           <InfoIcon />
        //         </Button>
        //         <Button color="success" >
        //           <EditIcon />
        //         </Button>
        //         <Button color="error" >
        //           <DeleteIcon />
                  
        //         </Button>
        //       </Fragment>
        //     ),
        //   },

    ];
    
      const rows = [
        { id: 1, LeaveType: 'Annual', Reason: 'Vacation', Status: 'Approved', Duration: '5 days', Department: 'HR' },
        { id: 2, LeaveType: 'Sick', Reason: 'Flu', Status: 'Pending', Duration: '3 days', Department: 'Finance' },
        { id: 3, LeaveType: 'Maternity', Reason: 'Maternity leave', Status: 'Approved', Duration: '12 weeks', Department: 'Operations' },
        { id: 4, LeaveType: 'Unpaid', Reason: 'Personal reasons', Status: 'Rejected', Duration: '2 days', Department: 'Sales' },
        { id: 5, LeaveType: 'Annual', Reason: 'Family vacation', Status: 'Approved', Duration: '7 days', Department: 'Marketing' },
        { id: 6, LeaveType: 'Sick', Reason: 'Food poisoning', Status: 'Approved', Duration: '2 days', Department: 'HR' },
        { id: 7, LeaveType: 'Maternity', Reason: 'Childbirth', Status: 'Approved', Duration: '16 weeks', Department: 'Finance' },
        { id: 8, LeaveType: 'Unpaid', Reason: 'Emergency', Status: 'Pending', Duration: '3 days', Department: 'Operations' },
        { id: 9, LeaveType: 'Annual', Reason: 'Travel', Status: 'Approved', Duration: '10 days', Department: 'Sales' },
        { id: 10, LeaveType: 'Sick', Reason: 'Cold', Status: 'Approved', Duration: '1 day', Department: 'Marketing' }
      ]
  return (
    <div className='bg-white'>
                <div className="row">
    <div className="col-md-8  ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxtitle">Leave Info</div>
       
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
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >search</Button>
            </div>
            <div className="col-xl-4 mt-2 col-md-12 col-sm-12">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
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

export default Leave