


import React, { Fragment } from 'react'
// import "./Home.scss"
// import '../../Home.scss'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Dashhead from './Dashhead';
import Dashhead from '../../../Dashhead';
// import Header from '../header/Header';
import Header from '../../dashboard/header/Header';
// import '../dashboard.scss'
import '../../dashboard/dashboard.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
function Clients() {
    const [display,setDisplay]=React.useState(false)
    const history= useHistory()

    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'CompanyName', headerName: 'Client Name', width: 150 },
        { field: 'Email', headerName: 'Client Number', width: 150 },
        { field: 'Phone', headerName: 'Industry', width: 150 },
        { field: 'City', headerName: 'Status', width: 150 },
        // { field: 'Country', headerName: 'Action', width: 150 },
       
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
        { id: 1, CompanyName: 'Icy', Email: 'Laura@gmail.com', Phone: 1234567890, City: 'Ahmedabad', Country: 'India' },
        { id: 2, CompanyName: 'Sunshine', Email: 'Jane@gmail.com', Phone: 2345678901, City: 'Delhi', Country: 'India' },
        { id: 2, CompanyName: 'Sunshine', Email: 'Jane@gmail.com', Phone: 2345678901, City: 'Delhi', Country: 'India' },
        { id: 3, CompanyName: 'Peak', Email: 'Mike@gmail.com', Phone: 3456789012, City: 'Bangalore', Country: 'India' },
        { id: 4, CompanyName: 'Frosty', Email: 'Sarah@gmail.com', Phone: 4567890123, City: 'Chennai', Country: 'India' },
        { id: 5, CompanyName: 'Blizzard', Email: 'Chris@gmail.com', Phone: 5678901234, City: 'Kolkata', Country: 'India' },
        { id: 6, CompanyName: 'Chill', Email: 'Emily@gmail.com', Phone: 6789012345, City: 'Hyderabad', Country: 'India' },
        { id: 7, CompanyName: 'Frost', Email: 'Alex@gmail.com', Phone: 7890123456, City: 'Pune', Country: 'India' },
        { id: 8, CompanyName: 'Icy', Email: 'Laura@gmail.com', Phone: 8901234567, City: 'Ahmedabad', Country: 'India' },
        { id: 9, CompanyName: 'Glacier', Email: 'Mark@gmail.com', Phone: 9012345678, City: 'Jaipur', Country: 'India' },
        { id: 10, CompanyName: 'Snowy', Email: 'Ava@gmail.com', Phone: 1234567890, City: 'Lucknow', Country: 'India' },
        { id: 11, CompanyName: 'Frostbite', Email: 'Ryan@gmail.com', Phone: 2345678901, City: 'Patna', Country: 'India' }
      ];
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={7} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className="container my-5">
      <p className='sidTitle'>Dashboard / <span>Clients</span></p>
      <p className='sidTitle2'>ALL Clients</p>
    </div>

    <div className="box">
{/* ===================================================================================================================================================================== */}

        <div className="row">
    <div className="col-md-8 mt-5 ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxTitle">Manage Clients</div>
      
      </div>
    </div>
    <div className="col-md-3 mt-5 mr-2">
         {/* <!-- Column for right side icon --> */}
      {/* <!-- Your right side icon here --> */}
      <div className="d-flex justify-content-end">
    
        <div className="p-2 ">
            <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '30px',color:'#2F69FF' }}/>}style={{ fontSize: '18px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white' }} onClick={()=>history.push("/Addcompany")} >
        Add Clients
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
    <div className="box">

    </div>



             </div>
    </div>
    )
}

export default Clients
