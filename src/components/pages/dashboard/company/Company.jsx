

import React, { Fragment, useEffect, useState } from 'react'
// import "./Home.scss"
// import '../../Home.scss'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Dashhead from './Dashhead';
import Dashhead from '../../../Dashhead';
import Header from '../header/Header';
import '../dashboard.scss'
import { Box, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
// ======================================Get Api======================================================

export const getCompany = (setData) => {
  const url = process.env.REACT_APP_DEVELOPMENT;
  axios.get(`${url}/api/get-company/`)
    .then(response => {
      const arr = response.data.map((item, index) => ({
        ...item,
        id: index + 1
      }));
      setData(arr);
    })
    .catch(error => {
      console.error('Error fetching data:', error);

    });
};


function Company() {
    const [display,setDisplay]=React.useState(false)
    const [data,setData]=useState([])
    const history= useHistory()

    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'company_name', headerName: 'Company Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'phone_number', headerName: 'Phone', width: 150 },
        { field: 'location', headerName: 'City', width: 150 },
        { field: 'Country', headerName: 'Country', width: 150 },
       
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
    
  
      // ============================================Get api====================================================================================================================
        
        useEffect(()=>{
          getCompany(setData)
        },[])
        console.log(data)
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={2} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className=" container-fluid my-5">
      <p className='sidTitle'>Dashboard / <span>Company</span></p>
      <p className='sidTitle2'>ALL COMPANY</p>
    </div>

    <div className="box">
{/* ===================================================================================================================================================================== */}

        <div className="row">
    <div className="col-md-8 mt-5 ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxTitle">All Company</div>
      
      </div>
    </div>
    <div className="col-md-3 mt-5 mr-2">
         {/* <!-- Column for right side icon --> */}
      {/* <!-- Your right side icon here --> */}
      <div className="d-flex justify-content-end">
    
        <div className="p-2 ">
            <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '25px',color:'#2F69FF' }}/>}style={{ fontSize: '14px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white' }} onClick={()=>history.push("/Addcompany")} >
        Add Company
        </Button>
        </div>
      </div>
    </div>


        </div>
{/* ===================================================================================================================================================================== */}
        <div className="d-flex justify-content-center">
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
        rows={data}
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

export default Company ;
