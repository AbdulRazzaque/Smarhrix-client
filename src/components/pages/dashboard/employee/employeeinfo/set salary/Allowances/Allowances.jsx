
import Infolist from '../../General/Generallist'
import React, { Fragment } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import AddAllowance from './AddAllowance';
const Allowances = () => {

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
        { field: 'PayslipType', headerName: 'Allowance Type', width: 150 },
        { field: 'banckSalary', headerName: 'Allowance Title', width: 150 },

       
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
        { id: 1, MonthYear: '1-2-203', PayslipType: 'Regular', banckSalary: 7890 },
        { id: 2, MonthYear: '1-2-203', PayslipType: 'Bonus', banckSalary: 7890 },
        { id: 3, MonthYear: '1-2-203', PayslipType: 'Regular', banckSalary: 7890 },
        { id: 4, MonthYear: '1-2-203', PayslipType: 'Overtime', banckSalary: 7890 },
        { id: 5, MonthYear: '1-2-203', PayslipType: 'Regular', banckSalary: 7890 },
        { id: 6, MonthYear: '1-2-203', PayslipType: 'Regular', banckSalary: 7890 },
        { id: 7, MonthYear: '1-2-203', PayslipType: 'Bonus', banckSalary: 7890 },
        { id: 8, MonthYear: '1-2-203', PayslipType: 'Regular', banckSalary: 7890 },
        { id: 9, MonthYear: '1-2-203', PayslipType: 'Regular', banckSalary: 7890 },
        { id: 10, MonthYear: '1-2-203', PayslipType: 'Bonus', banckSalary: 7890 },
      ]
  return (

       <>

            <div className="row">
    <div className="col-md-8  ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxtitle">All Allowance</div>
       
      </div>
    </div>
    <div className="">
         {/* <!-- Column for right side icon --> */}
      {/* <!-- Your right side icon here --> */}
      <div className="d-flex justify-content-end">
    
        <div className="">
            <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '25px',color:'#2F69FF' }}/>}style={{ fontSize: '14px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white', textTransform:'none'}}  
onClick={handleClickOpen}>
        Add Allowance
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
      <AddAllowance
       open={open}
       handleClickOpen={handleClickOpen}
       handleClose={handleClose}
      
      />
    </Box>
           
              
              </>
  )
}

export default Allowances