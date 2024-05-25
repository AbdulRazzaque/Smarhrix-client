

import React, { Fragment, useEffect, useState } from 'react'
// import "./Home.scss"
// import '../../Home.scss'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Dashhead from './Dashhead';
import Dashhead from '../../../Dashhead';
import Header from '../header/Header';
import '../dashboard.scss'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DataGrid } from '@mui/x-data-grid';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
import Companyinfo from './Companyinfo';
import { senRowData } from '../../../redux/socket/socketActions';
import Info from '../info/Info';
import { useDispatch } from 'react-redux';
// ======================================Get Api===========================================================================================

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
// =================Main Component start Here===========================================================================

function Company() {
    const [display,setDisplay]=React.useState(false)
    const [data,setData]=useState([])
    const [alert, setAlert] = useState(false);
    const [update,setUpdate]=useState([])
    const [open, setOpen] = React.useState(false);
    const history= useHistory()
    const [openInfo, setOpenInfo] = useState(false);


    const dispatch = useDispatch();
// ============================columns=============================================================================================
    const columns = [
        { field: 'id', headerName: 'S.N', width: 90 },
        { field: 'company_name', headerName: 'Company Name', width: 150 },
        { field: 'admin_name', headerName: 'Admin Name', width: 150 },
        { field: 'admin_phone_number', headerName: 'Admin Phone Number', width: 150 },
        { field: 'gst_number', headerName: 'GST Number', width: 150 },
        { field: 'pancard_number', headerName: 'Pancard Number', width: 150 },
        { field: 'tan_number', headerName: 'TAN number', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'website', headerName: 'Website', width: 150 },
       
      
       
          {
            title: "Action",
            field: "Action",
            width: 180,
            renderCell: (params) => (
              <Fragment>
                  <Button color="primary" onClick={()=>handelClick(params.row)}>
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
    
// ============================================Get api====================================================================================================================
        
        useEffect(()=>{
          getCompany(setData)
        },[])
        // console.log(data)
//=======================================================Delete code & api here ==============================================================
  const deleteRow = async (update) => {

    try {
      await axios
        .post(
          `${process.env.REACT_APP_DEVELOPMENT}/api/delete-company/${update.uuid}`,)
          .then(response=>{
          console.log('Response',response)
          // apiRef.current.updateRows([update])
          })
  
          getCompany(setData)
        
      setAlert(false);
    } catch (error) {
      console.log(error);
    }
  };
  // ===========================company information Code============================================================
  const handleClickOpen = () => {
    setOpen(true);
    
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };
  const handelClick =(params)=>{
    // history.push("/Employeeinfo")
    dispatch(senRowData({params}));
    console.log(params)
    setOpenInfo(true)

  }
// ===================================End================================================================================================
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


        <div className="row">
    <div className="col-md-8 mt-5 ml-3">

      <div className="d-flex justify-content-start">
        <div className="p-2 boxTitle">All Company</div>
      
      </div>
    </div> 
    <div className="col-md-3 mt-5 mr-2">
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
        onRowClick={(item)=>setUpdate(item.row)}
      />
    </Box>
    <Info

openInfo={openInfo}
handleCloseInfo={handleCloseInfo}
columns ={columns}

/>
    {/* <Companyinfo
    data ={update}
     open={open}
     handleClickOpen={handleClickOpen}
     handleClose={handleClose}
    
    /> */}
    </div>
    <div className="box">

    </div>



             </div>
    </div>
    )
}

export default Company ;
