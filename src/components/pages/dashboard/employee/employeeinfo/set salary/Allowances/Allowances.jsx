
import Infolist from '../../General/Generallist'
import React, { Fragment, useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import AddAllowance from './AddAllowance';
import axios from 'axios';
const Allowances = () => {

  const [open, setOpen] = React.useState(false);
  const [data,setData]=useState([])
  const [alert, setAlert] = useState(false);
  const [update,setUpdate]=useState([])

 

    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'month_year', headerName: 'Month-Year', width: 150 },
        { field: 'allowance_type', headerName: 'Allowance Type', width: 150 },
        { field: 'allowance_title', headerName: 'Allowance Title', width: 150 },
        { field: 'allowance_amount', headerName: 'Allowance Amount', width: 150 },

       
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
              const url = process.env.REACT_APP_DEVELOPMENT;
              const getAllowances = async()=>{
              
               await axios.get(`${url}/api/employees/set-salary/get-allowance/`)
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
              }
              //=======================================================Delete code & api here ==============================================================
                const deleteRow = async (update) => {
              
                  try {
                    await axios
                      .post(
                        `${process.env.REACT_APP_DEVELOPMENT}/api/employees/set-salary/delete-basic-salary/${update.uuid}`,)
                        .then(response=>{
                        console.log('Response',response)
                        // apiRef.current.updateRows([update])
                        })
                
                        getAllowances()
                      
                    setAlert(false);
                  } catch (error) {
                    console.log(error);
                  }
                }; 
                // =======================================================================================================
              useEffect(()=>{
                getAllowances()
              },[])
                   
                // =========================================Model colse & open==============================================================
              
              const handleClickOpen = () => {
                setOpen(true);
              };
              const handleClose = () => {
                setOpen(false);
              };
              // ==================================================================================================================
               
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