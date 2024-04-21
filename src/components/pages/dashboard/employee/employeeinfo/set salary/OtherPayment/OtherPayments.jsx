

import React from 'react'
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DataGrid } from '@mui/x-data-grid';
import AddOtherPayment from './AddOtherPayment';
const OtherPayments = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'MonthYear', headerName: 'Month-Year', width: 150 },
        { field: 'banckSalary', headerName: 'Title', width: 150 },
        { field: 'banckSalary', headerName: 'Amount', width: 150 },

       
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

      ]
  return (

       <>

            <div className="row">
    <div className="col-md-8  ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxtitle">Other Payment</div>
       
      </div>
    </div>
    <div className="">
         {/* <!-- Column for right side icon --> */}
      {/* <!-- Your right side icon here --> */}
      <div className="d-flex justify-content-end">
    
        <div className="">
            <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '25px',color:'#2F69FF' }}/>}style={{ fontSize: '14px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white', textTransform:'none'}}  onClick={handleClickOpen}>
        Add Other Payment
        </Button>
        </div>
      </div>
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
           
              <AddOtherPayment
               open={open}
               handleClickOpen={handleClickOpen}
               handleClose={handleClose}
              />
              </>
  )
}

export default OtherPayments