
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../../Dashhead';
import Header from '../header/Header';
import '../dashboard.scss'
import { Autocomplete, Button, InputLabel, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
function Addemployee() {
    const [display,setDisplay]=React.useState(false)
    const [selectedDate,setSelectedDate]=useState()
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
        <div className="container my-5">
      <p className='sidTitle'>Dashboard / Employees / <span>Add Employee</span></p>
      <p className='sidTitle2'>CREATE EMPLOYEE</p>
    </div>

    <div className="box ">
{/* ===================================================================================================================================================================== */}
        <div className=" px-5 my-5 bg-white">
        <p className="whitboxtitle my-4">Basic Information</p>
        <hr/>
           {/* ---------------------------------------------------First Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">First Name *</InputLabel>

              <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
                placeholder="First Name"
                required
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Last Name *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
                placeholder="Second Name"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Staff Id*</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
                placeholder="Staff Id"
                type=""
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Email*</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
          
                placeholder="Email"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------Therd Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Phone number *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
            
                placeholder="Phone number"
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Date of Birth *</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // sx={{ width: 700 }}
                  // label="Date of Birth"
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField name="date" {...params}  sx={{ width: 400 }} />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic"> Gender *</InputLabel>
                 <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Gender' required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Company *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Company'  required/>}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------fifth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Department *</InputLabel>
                 <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Department'  required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Designation *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} placeholder="Select Designation"  required/>}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------sixth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Office Shift *</InputLabel>
                 <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params}  placeholder="select Office Shit" required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Username*</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
                label="Username"
                placeholder="Enter User Name"
                type="text"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------seven Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Role *</InputLabel>
            <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params}  placeholder="select Role" />}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Password *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
          
                placeholder="Enter Password"
                type="text"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------seven Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Confirm Password *</InputLabel>
            <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
               
                placeholder="Enter Confirm Password"
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Attendance Type *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params}  placeholder="select Attendance Type" />}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------eight Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Dateof joining *</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // sx={{ width: 700 }}
                  label="Date"
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField name="date" {...params}  sx={{ width: 400 }} />
                  )}
                />
              </LocalizationProvider>
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Image *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width: 400 }}
               
                placeholder="No file choosen"
                type="file"
                variant="outlined"
              />
            </div>
          </div>
          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Company</Button>
            </div>
          <div className="">
            <Button variant='contained' 
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#011526'}}
            >Reset All Changes</Button>
            </div>
          </div>
        
        </div>
    </div>
 


             </div>
    </div>
    )
}

export default Addemployee
