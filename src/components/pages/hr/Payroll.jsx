



import React, { Fragment, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Dashhead from './Dashhead';
// import Dashhead from '../../../Dashhead';
import Dashhead from '../../Dashhead';
// import Header from '../header/Header';
import Header from '../dashboard/header/Header';
import '../dashboard/dashboard.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Autocomplete, Box, Button, TextField } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Tabsection from './tabSection/Tabsection';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function Payroll() {
    const [display,setDisplay]=React.useState(false)
    const [selectedDate,setSelectedDate]=useState()
    const history= useHistory()

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
      const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'LeaveType', headerName: 'Name', width: 150 },
        { field: 'Reason', headerName: 'PaySlip Type', width: 150 },
        { field: 'Status', headerName: 'Basic Salary', width: 150 },
        { field: 'Duration', headerName: 'Net Salary', width: 150 },
        { field: 'Duration', headerName: 'Status', width: 150 },

       
          {
            title: "Action",
            field: "Action",
            width: 180,
            renderCell: () => (
              <Fragment>
                {/* <Button color="error" onClick={() => setAlert(true)}> */}
                <Button color="primary">
                  <InfoIcon />
                </Button>
                <Button color="success" >
                  <EditIcon />
                </Button>
                <Button color="error" >
                  <DeleteIcon />
                  
                </Button>
              </Fragment>
            ),
          },

    ];
    
      const rows = [
        { id: 1, LeaveType: 'Annual', Reason: 'Vacation', Status: 'Approved', Duration: '5 days', Department: 'HR' },
        { id: 2, LeaveType: 'Sick', Reason: 'Flu', Status: 'Pending', Duration: '3 days', Department: 'Finance' },

 
      ]
    
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={6} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className="container my-5">
      <p className='sidTitle'>Dashboard /<span>Payment</span> </p>
      <p className='sidTitle2'>PAYMENT</p>
    </div>

    {/* ========================================================Third row ======================================================= */}

    
   <div className="box my-5">
    <div className="row">
        <div className="col-12">
            
      <div className="d-flex justify-content-start">
        <div className="p-2 boxtitle ml-2">Generate payslip</div>
      </div>
        </div>

        <div className="col-12 ">
     <hr className='mx-3' />
        </div>
        <div className="row">
        <div className="col-12 col-md-4">


<Autocomplete
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(department)=>department.name}
             options={department}
             onChange={(event,value)=>{
              // setSelectedDepartment(value.name)
             }}
            sx={{ width:300 ,m:1}}
            renderInput={(params) => <TextField {...params} label="All Companies" style={{backgroundColor:'white'}} />}
            />

</div>
<div  className='col-12 col-md-4'>
<Autocomplete
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(department)=>department.name}
             options={department}
             onChange={(event,value)=>{
              // setSelectedDepartment(value.name)
             }}
            sx={{ width: 300 ,m:1}}
            renderInput={(params) => <TextField {...params} label="All Departments" style={{backgroundColor:'white'}} />}
            />
</div>
        <div className="col-12 col-md-4">


<LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                  // sx={{ width: 700 }}
                  label="Date of Birth"
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField name="date" {...params}  sx={{ width: 300 ,m:1}} style={{backgroundColor:'white'}} />
                  )}
                />
              </LocalizationProvider>

      </div>

        </div>

      
        <div className="col-12 my-5 ml-2">
        <Button variant="contained" style={{ fontSize: '15px',borderRadius: 50 , textTransform:'none', backgroundColor:'#2F69FF'}}  >
        Search
    </Button>
        </div>
    </div>
   </div>

    {/* ========================================================Third row ======================================================= */}
                    {/* <hr /> */}
                    <div className=" text-center">
        <div className="p-2 boxtitle  ">showing Payment info August - 2023</div>
      </div>

{/* ===================================================================================================================================================================== */}
<div className="d-flex justify-content-center ">

        <div className="row ">
            <div className="col-xl-5  col-md-5 col-9">
            <TextField
              id="outlined-basic"
              label="Search Clients..."
              variant="outlined"
            className='searchinput'
            InputProps={{ sx: { borderRadius: 10, backgroundColor:"white" ,height:50} }}
            //   required
              
            />
            </div>
            <div className='col-xl-2 col-md-3 col-2 mt-2 '>
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >search</Button>
            </div>
            <div className="col-xl-4 mt-2 col-md-12 col-6">
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
    </div>
    )
}

export default Payroll
