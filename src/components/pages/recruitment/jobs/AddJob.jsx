
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
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
function AddJob() {
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
            <Dashhead id={8} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

        <Header/>
        <div className=" container-fluid my-5">
      <p className='sidTitle'>Dashboard / Jobs / <span>Create</span></p>
      <p className='sidTitle2'>CREATE JOB</p>
    </div>

    <div className="box ">
{/* ===================================================================================================================================================================== */}
        <div className=" px-5 my-5 bg-white">
        <p className="whitboxtitle my-4">Basic Information</p>
        <hr/>
           {/* ---------------------------------------------------First Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Job Title *</InputLabel>

              <TextField
                id="outlined-basic"
               sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Job Title"
                required
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Total Vacancy *</InputLabel>
              <TextField
                id="outlined-basic"
               sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="1"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Client *</InputLabel>
            <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Client' required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Contact *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Contact' required/>}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------Therd Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Publish Date *</InputLabel>
           
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // sx={{ width: 700 }}
            
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField name="date" {...params} 
                    sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                          }} 
                         />
                  )}
                />
              </LocalizationProvider>
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Application Deadline *</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // sx={{ width: 700 }}
            
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField name="date" {...params}  
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                          }} 
                        />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
           {/* ---------------------------------------------------Forth Row Start Here------------------------------------------- */}
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
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Industry' required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Job Type *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Job Type' required/>}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------Fifth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Job Open Status *</InputLabel>
           
            <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                     sx={{ 
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Job Opening Status' required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Minimum Experince (in Years) *</InputLabel>
              <TextField
                id="outlined-basic"
               sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Minimum Numbaer of Experince in Years"
                required
                type="text"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------Sixth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Maximum Experince (in Years) *</InputLabel>
           
            <TextField
                id="outlined-basic"
               sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Maximum Numbaer of Experince in Years"
                required
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Minimum Salary *</InputLabel>
              <TextField
                id="outlined-basic"
               sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Minimum Salary"
                required
                type="number"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------Sixth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Max Salary *</InputLabel>
           
            <TextField
                id="outlined-basic"
               sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Max Salary on Month Basic"
                required
                type="number"
                variant="outlined"
              />
            </div>          
             
          </div>
      
       
      
        </div>

       
{/* ===================================Second Section start Herer================================================================================================ */}
            <div className=" px-5 my-3 bg-white" >
        <div className="row">
            <div className="col-6">

        <p className="whitboxtitle my-4">Add Address Infomation</p>
            </div>
          
        </div>
          
        <hr/>
        
    

   <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Street*</InputLabel>

              <TextField
                id="outlined-basic"
               sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
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
                                    width:'100%',   maxWidth: '500Px' 
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
                                    width:'100%',   maxWidth: '500Px' 
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
                                    width:'100%',   maxWidth: '500Px' 
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
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                                renderInput={(params) => <TextField {...params} placeholder='Select Deduction Option' required/>}
                                />
            </div>          
              
          </div>
      

       
       
      
        </div>
   
{/* ===================================Thired Section start Herer================================================================================================ */}

<div className=" px-5 py-4 my-3 bg-white" >
        <div className="row">
            <div className="col-6">

        <p className="whitboxtitle my-4">Add Address Infomation</p>
            </div>
          
        </div>
          
        <hr/>
        
    

   <div className="row d-flex flex-row mt-4">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic">Role & Responsiblity*</InputLabel>

            <TextField
                variant='outlined'
                fullWidth
                multiline
                minRows={8}
                size='small'
                />
            </div>          
            
          </div>

   <div className="row d-flex flex-row mt-4">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic">Job Requirements*</InputLabel>

            <TextField
                variant='outlined'
                fullWidth
                multiline
                minRows={8}
                size='small'
                />
            </div>          
            
          </div>

   <div className="row d-flex flex-row mt-4">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic">Additional Requirements*</InputLabel>

            <TextField
                variant='outlined'
                fullWidth
                multiline
                minRows={8}
                size='small'
                />
            </div>          
            
          </div>
   <div className="row d-flex flex-row mt-4">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic">Benefit </InputLabel>

            <TextField
                variant='outlined'
                fullWidth
                multiline
                minRows={8}
                size='small'
                />
            </div>          
            
          </div>
   <div className="row d-flex flex-row mt-4">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic">Apply instruction </InputLabel>

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
{/* ===================================Thired Section start Herer================================================================================================ */}
       
             <div className=" px-5 my-4 py-5 bg-white">
        <p className="whitboxtitle my-4">Client Information</p>
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

export default AddJob
