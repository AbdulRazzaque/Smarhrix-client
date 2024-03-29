
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../../Dashhead';
import Header from '../header/Header';
import '../dashboard.scss'
import { Autocomplete, Button, TextField } from '@mui/material';
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
            
            <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="First Name"
                placeholder="First Name"
                required
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="Last Name"
                placeholder="Second Name"
                required
                type="number"
                variant="outlined"
              />
              {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1}}
                    renderInput={(params) => <TextField {...params} label="Select Company Type" />}
                    /> */}
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="Staff Id"
                placeholder="Staff Id"
                type=""
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="Email"
                placeholder="Email"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------Therd Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="Phone number"
                placeholder="Phone number"
                type="number"
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12 ">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // sx={{ width: 700 }}
                  label="Date of Birth"
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField name="date" {...params}  sx={{ width: 350,mt:1}} />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-md-6 col-12 ">
                 <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1}}
                    renderInput={(params) => <TextField {...params} label="Select Gender" required/>}
                    />
            </div>          
              <div className="col-md-6 col-12 ">
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1}}
                    renderInput={(params) => <TextField {...params} label="Select Company"  required/>}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------fifth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-md-6 col-12 ">
                 <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1}}
                    renderInput={(params) => <TextField {...params} label="Select Department" required/>}
                    />
            </div>          
              <div className="col-md-6 col-12 ">
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1}}
                    renderInput={(params) => <TextField {...params} label="Select Designation"  required/>}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------sixth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-md-6 col-12 ">
                 <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1}}
                    renderInput={(params) => <TextField {...params} label="Office Shift" placeholder="select Office Shit" required/>}
                    />
            </div>          
              <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="Username"
                placeholder="Enter User Name"
                type="text"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------seven Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-md-6 col-12 ">
            <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1}}
                    renderInput={(params) => <TextField {...params} label="Role" placeholder="select Role" required/>}
                    />
            </div>          
              <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="Password"
                placeholder="Enter Password"
                type="text"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------seven Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-md-6 col-12 ">
            <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="Confirm Password"
                placeholder="Enter Confirm Password"
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-md-6 col-12 ">
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      // setSelectedDepartment(value.name)
                     }}
                    sx={{ width: 350,mt:1}}
                    renderInput={(params) => <TextField {...params} label="Attendance Type" placeholder="select Attendance Type" required/>}
                    />
            </div>
          </div>
           {/* ---------------------------------------------------eight Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-md-6 col-12 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // sx={{ width: 700 }}
                  label="Date"
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => (
                    <TextField name="date" {...params}  sx={{ width: 350,mt:1}} />
                  )}
                />
              </LocalizationProvider>
            </div>          
              <div className="col-md-6 col-12 ">
              <TextField
                id="outlined-basic"
                sx={{ width: 350,mt:1}}
                label="Image"
                placeholder="Enter Confirm Password"
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
