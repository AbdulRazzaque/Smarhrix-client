

import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Dashhead from '../../../Dashhead';
import Dashhead from '../../../Dashhead';
// import Header from '../header/Header';
import Header from '../../dashboard/header/Header';
// import '../dashboard.scss'
import '../../dashboard/dashboard.scss'
import { Autocomplete, Button, InputLabel, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
function AddClient() {
    const [display,setDisplay]=React.useState(false)
    const [selectedDate,setSelectedDate]=useState()
    const [addressCount, setAddressCount] = useState(1)
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
    const gender =[
      {name:'Male'},
      {name:"Fmale"},
      {name:"Other"},

      
    ]

    const addAddress = ()=>{
        setAddressCount(addressCount +1)
    }

    const deleteAddress = (index) => {
        setAddressCount(addressCount -index)
    };
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
        <div className=" container-fluid my-5">
      <p className='sidTitle'>Dashboard / Client / <span>Create</span></p>
      <p className='sidTitle2'>CREATE CLIENT</p>
    </div>

    <div className="box ">
{/* ===================================================================================================================================================================== */}
        <div className=" px-5 my-5 bg-white">
        <p className="whitboxtitle my-4">Client Information</p>
        <hr/>
           {/* ---------------------------------------------------First Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Client Name *</InputLabel>

              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                placeholder="Enter Client Name (Eg.Sharjeel Shaikh)"
                required
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Contact Number *</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                placeholder="Enter Contact Number (Eg.1234556678)"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Fax*</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                placeholder="Staff Id"
                type=""
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Website*</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
          
                placeholder="Email"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------Therd Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Industry *</InputLabel>
           
            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                getOptionLabel={(department)=>department.name}
                                options={department}
                                onChange={(event,value)=>{
                                // setSelectedDepartment(value.name)
                                }}
                                sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                                renderInput={(params) => <TextField {...params} placeholder='Select Deduction Option' required/>}
                                />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Source *</InputLabel>
              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                getOptionLabel={(department)=>department.name}
                                options={department}
                                onChange={(event,value)=>{
                                // setSelectedDepartment(value.name)
                                }}
                                sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                                renderInput={(params) => <TextField {...params} placeholder='Select Sourece' required/>}
                                />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-11">
            <InputLabel htmlFor="outlined-basic"> Gender *</InputLabel>
            <TextField
                variant='outlined'
                fullWidth
                multiline
                minRows={8}
                size='small'
                />
            </div>          
              
          </div>
       
      
        </div>

        {[...Array(addressCount)].map((_,index)=>(

            <div className=" px-5 my-3 bg-white" key={index}>
        <div className="row">
            <div className="col-6">

        <p className="whitboxtitle my-4">Add Address Infomation</p>
            </div>
            <div className="col-6 my-3">
        <div className="d-flex justify-content-end">
        <Button variant="outlined" startIcon={<DeleteIcon style={{ fontSize: '25px',color:'#D9114A' }}/>}style={{ fontSize: '14px',borderRadius: 50 , borderColor:"#D9114A", color:'#D9114A', backgroundColor:'white', textTransform:'none'}}  onClick={() => deleteAddress(index)}>
   DELETE ADDRESS
    </Button>
    </div>

            </div>
        </div>
          
        <hr/>
        
    
    {/* <div className=""> */}
    {/* </div> */}
   <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Street*</InputLabel>

              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                placeholder="Street"
                required
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">City *</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                placeholder="City"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>

           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">State*</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                placeholder="State"
                type=""
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">City Code *</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
          
                placeholder="City Code "
                variant="outlined"
              />
            </div>
          </div>

           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Country *</InputLabel>
           
            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                getOptionLabel={(department)=>department.name}
                                options={department}
                                onChange={(event,value)=>{
                                // setSelectedDepartment(value.name)
                                }}
                                sx={{ 
                                    width:'100%',   maxWidth: '400Px' 
                                  }}
                                renderInput={(params) => <TextField {...params} placeholder='Select Deduction Option' required/>}
                                />
            </div>          
              
          </div>
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            {/* <div className="p-2 "> */}
            <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '25px',color:'#2F69FF' }}/>}style={{ fontSize: '14px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white', textTransform:'none' }} onClick={addAddress}  >
        Add Another Address
        </Button>
        {/* </div> */}
            </div>          
              
            </div>

       
       
      
        </div>
   
         ))}
             <div className=" px-5 my-4 py-2 bg-white">
        <p className="whitboxtitle my-4">Attachment Information</p>
        <hr/>
           {/* ---------------------------------------------------First Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Attached Contract </InputLabel>

              <TextField
                id="standard"
                sx={{ 
                    width: '100%',
                    maxWidth: '400px',
                    "& fieldset": {
                      border: 'none' 
                    }
                  }}
               
                required

                type="file"
                variant="outlined"
               
                    // <== adjusted this
                    
                
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Attached Contract </InputLabel>

              <TextField
                id="standard"
                sx={{ 
                    width: '100%',
                    maxWidth: '400px',
                    "& fieldset": {
                      border: 'none' 
                    }
                  }}
               
                required

                type="file"
                variant="outlined"
               
                    // <== adjusted this
                    
                
              />
            </div>          
              
          </div>
         
       
      
        </div>

        <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Submit</Button>
            </div>
          <div className="">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#011526'}}
            >Reset</Button>
            </div>
          </div>
    </div>
 


             </div>
    </div>
    )
}

export default AddClient
