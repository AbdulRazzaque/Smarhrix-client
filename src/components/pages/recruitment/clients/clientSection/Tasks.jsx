// import Infolist from '../General/Generallist'
import React, { Fragment } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const Tasks = () => {
    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'LeaveType', headerName: 'Due Date', width: 150 },
        { field: 'Reason', headerName: 'Task Status', width: 150 },
        { field: 'Status', headerName: 'Priorty', width: 150 },
        // { field: 'Duration', headerName: 'City', width: 150 },
        // { field: 'Department', headerName: 'Action', width: 150 },

       
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
        //         {/* <Button color="success" >
        //           <EditIcon />
        //         </Button>
        //         <Button color="error" >
        //           <DeleteIcon />
                  
        //         </Button> */}
        //       </Fragment>
        //     ),
        //   },

    ];
    
      const rows = [
      ]
  return (
    <div className='bg-white p-3'>
                <div className="row">
    <div className="col-md-8  ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxtitle">Tasks</div>
       
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

export default Tasks



