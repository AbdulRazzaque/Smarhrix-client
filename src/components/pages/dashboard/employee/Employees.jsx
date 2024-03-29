
import React, { Fragment } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Dashhead from './Dashhead';
import Dashhead from '../../../Dashhead';
import Header from '../header/Header';
import '../dashboard.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
function Employees() {
    const [display,setDisplay]=React.useState(false)
    const history= useHistory()

    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'Employee', headerName: 'Employee', width: 150 },
        { field: 'Department', headerName: 'Department', width: 150 },
        { field: 'Designation', headerName: 'Designation', width: 150 },
        { field: 'Contact', headerName: 'Contact', width: 150 },
        { field: 'City', headerName: 'City', width: 150 },
        { field: 'Country', headerName: 'Country', width: 150 },
       
          {
            title: "Action",
            field: "Action",
            width: 180,
            renderCell: () => (
              <Fragment>
                {/* <Button color="error" onClick={() => setAlert(true)}> */}
                <Button color="primary" onClick={()=>{history.push("/Employeeinfo")}}>
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
        { id: 1, Employee: 'Arctic', Department: 'Marketing', Designation: 'Marketing Coordinator', Contact: 9876543210, City: 'Mumbai', Country: 'India' },
        { id: 2, Employee: 'Polar', Department: 'Sales', Designation: 'Sales Manager', Contact: 8765432109, City: 'Bengaluru', Country: 'India' },
        { id: 3, Employee: 'Glacial', Department: 'Finance', Designation: 'Financial Analyst', Contact: 7654321098, City: 'Chandigarh', Country: 'India' },
        { id: 4, Employee: 'Frozen', Department: 'Human Resources', Designation: 'HR Manager', Contact: 6543210987, City: 'Ahmedabad', Country: 'India' },
        { id: 5, Employee: 'Iceberg', Department: 'Operations', Designation: 'Operations Manager', Contact: 5432109876, City: 'Jaipur', Country: 'India' },
        { id: 6, Employee: 'Frostbite', Department: 'Research and Development', Designation: 'Research Scientist', Contact: 4321098765, City: 'Kolkata', Country: 'India' },
        { id: 7, Employee: 'Chilly', Department: 'Customer Service', Designation: 'Customer Support Specialist', Contact: 3210987654, City: 'Chennai', Country: 'India' },
        { id: 8, Employee: 'Icicle', Department: 'Information Technology', Designation: 'IT Specialist', Contact: 2109876543, City: 'Delhi', Country: 'India' },
        { id: 9, Employee: 'Snowfall', Department: 'Quality Assurance', Designation: 'QA Tester', Contact: 1098765432, City: 'Hyderabad', Country: 'India' },
        { id: 10, Employee: 'Freeze', Department: 'Product Management', Designation: 'Product Manager', Contact: 1234567890, City: 'Pune', Country: 'India' },
        { id: 11, Employee: 'Polaris', Department: 'Engineering', Designation: 'Software Developer', Contact: 2345678901, City: 'Lucknow', Country: 'India' },
        { id: 12, Employee: 'Icy Peaks', Department: 'Supply Chain', Designation: 'Logistics Coordinator', Contact: 3456789012, City: 'Gurgaon', Country: 'India' }
    ];
    
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={3} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className="container my-5">
      <p className='sidTitle'>Dashboard / <span>Employee</span></p>
      <p className='sidTitle2'>ALL EMPLOYEES</p>
    </div>

    <div className="box">
{/* ===================================================================================================================================================================== */}

        <div className="row">
    <div className="col-md-8 mt-5 ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxtitle">Manage Employees</div>
      
      </div>
    </div>
    <div className="col-md-3 mt-5 mr-2">
         {/* <!-- Column for right side icon --> */}
      {/* <!-- Your right side icon here --> */}
      <div className="d-flex justify-content-end">
    
        <div className="p-2 ">
            <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '30px',color:'#2F69FF' }}/>}style={{ fontSize: '18px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white' }} onClick={()=>history.push("/Addemployee")} >
        Add Employee
        </Button>
        </div>
      </div>
    </div>


        </div>
{/* ===================================================================================================================================================================== */}
<div className="d-flex justify-content-center mx-5">
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
    </div>
    )
}

export default Employees
