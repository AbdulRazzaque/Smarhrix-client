

import React, { Fragment, useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import AddWorkExperience from './AddWorkExperience';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import moment from 'moment';
const Workexperience = () => {
  const [open, setOpen] = React.useState(false);
  const [data,setData]=useState([])
  const [alert, setAlert] = useState(false);
  const [update,setUpdate]=useState([])



    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'company', headerName: 'Company', width: 150 },
        { field: 'from_date', headerName: 'From Data', width: 150,valueGetter:(params)=>moment.parseZone( params.row.from_date).format('DD/MM/YYYY') },
        { field: 'to_date', headerName: 'To Data', width: 150 ,valueGetter:(params)=>moment.parseZone( params.row.to_date).format('DD/MM/YYYY')},
        { field: 'post', headerName: 'Post', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
        // { field: 'banckSalary', headerName: 'Issued By', width: 150 },

       
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
                <Button color="error" onClick={() => setAlert(true)}>
                <DeleteIcon />
            </Button>
              </Fragment>
            ),
          },

    ];
    // ===============================Model open and clsoe===================================================================
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    }; 

    // ======================================================================================================================


    const handleClick = () => {
      // Perform the redirection when the element is clicked
     setOpen(true)
    };
// ============================================Get api====================================================================================================================
const url = process.env.REACT_APP_DEVELOPMENT;
const getWorkExperience =()=>{

axios.get(`${url}/api/employees/general/get-work-experience/`)
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
        `${process.env.REACT_APP_DEVELOPMENT}/api/employees/general/delete-work-experience/${update.uuid}`,)
        .then(response=>{
        console.log('Response',response)
        // apiRef.current.updateRows([update])
        })

        getWorkExperience()
      
    setAlert(false);
  } catch (error) {
    console.log(error);
  }
};
// =======================================================================================================
useEffect(()=>{
  getWorkExperience()
},[])
  
  return (
    <div>
        <div className="row">
<div className="col-md-8  ml-3">

  <div className="d-flex justify-content-start">
    <div className="p-2 boxtitle">All Work Experience </div>
   
  </div>
</div>
<div className="">
     {/* <!-- Column for right side icon --> */}
  {/* <!-- Your right side icon here --> */}
  <div className="d-flex justify-content-end">

    <div className="">
        <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '25px',color:'#2F69FF' }}/>}style={{ fontSize: '14px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white', textTransform:'none'}} onClick={handleClickOpen} >
    Add Work Experience
    </Button>
    </div>
  </div>
</div>


    </div>
    <hr />
        {/* =============================================Delete Modal code===================================================================================================================================== */}
{alert && (
          <Dialog open={alert} style={{ height: 600 }}>
            <DialogTitle>Delete Row</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are You sure You want to delete this.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={() => deleteRow(update)}>
                Yes
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setAlert(false);
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        )}

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
    onRowClick={(item)=>setUpdate(item.row)}
    disableRowSelectionOnClick
  />
</Box>
<AddWorkExperience
 open={open}
 handleClickOpen={handleClickOpen}
 handleClose={handleClose}
/>
    </div>
  )
}

export default Workexperience


