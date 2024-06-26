
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../../Dashhead';
import Header from '../header/Header';
import '../dashboard.scss'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Autocomplete, Button, InputLabel, TextField } from '@mui/material';
// import { DatePicker } from '@mui/lab';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getEmployee } from './Employees';
import { useForm } from 'react-hook-form';
import moment from 'moment'
import axios from 'axios';

function Addemployee() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
    const [display,setDisplay]=React.useState(false)
    const [selectedBirth,setSelectedBirth]=useState()
    const [selectedGender,setSelectedGender]=useState([])
    const [data,setData]= useState([])
    const [selectedCompany,setSelectedCompany]= useState([])
    const [selectedDepartmen,setSelectedDepartment]= useState([])
    const [selectedDesignation,setSelectedDesignation]= useState([])
    const [selectedShift,setSelectedShift]= useState([])
    const [selectedRole,setSelectedRole]= useState([])
    const [selectedAttendance,setSelectedAttendance]= useState([])
    
    const url=process.env.REACT_APP_DEVELOPMENT; 
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


    const onSubmit = async(data)=>{
      try {
        var obj ={
          date_of_birth:moment.parseZone(selectedBirth).format("YYYY-MM-DD"),
          gender:selectedGender,
          company:selectedCompany,
          department:selectedDepartmen,
          designation:selectedDesignation,
          office_shift:selectedShift,
          role:selectedRole,
          attendance_type:selectedAttendance,
          ...data
        }
        console.log('obj',obj)
        await axios.post(`${url}/api/create-employee/`,obj)
        .then(response=>{
          setData(response)
        }).catch(error=>console.log(error))
        reset()
        getEmployee()
      } catch (error) {
        console.log(error)
        
      }
      
      
    }

    console.log(selectedBirth ,'selectedBirth')
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
        <div className=" container-fluid my-5">
      <p className='sidTitle'>Dashboard / Employees / <span>Add Employee</span></p>
      <p className='sidTitle2'>CREATE EMPLOYEE</p>
    </div>

    <div className="box ">
{/* ===================================================================================================================================================================== */}
<form onSubmit={handleSubmit(onSubmit)}>
<div className=" px-5 my-5 bg-white">
        <p className="whitboxtitle my-4">Basic Information</p>
        <hr/>
           {/* ---------------------------------------------------First Row Start Here------------------------------------------- */}


         
           <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">First Name *</InputLabel>

              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
                placeholder="First Name"
                required
                type="text"
                variant="outlined"
                {...register('first_name', { required: true })}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Last Name *</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
                placeholder="Second Name"
                required
                type="text"
                variant="outlined"
                {...register('last_name', { required: true })}
              />
         
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic"> Staff ID (Unique identifier for each employee) *</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
                placeholder=" Staff ID"
                type=""
                variant="outlined"
                {...register('staff_id', { required: true })}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Email Address *</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder="Email"
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------Therd Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
           <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Phone Number *</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder="Enter Phone Number "
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
           <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Date of Birth *</InputLabel>
            
          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                       sx={{ width:'100%',   maxWidth: '500Px'}} 
                  // label="Date of Birth"
                  onChange={(newValue) => setSelectedBirth(newValue)}
                 
                  renderInput={(params) => (
                    <TextField name="date" {...params}       sx={{ width:'100%',   maxWidth: '500Px'}}  />
                  )}
                />
              </LocalizationProvider>
            </div>
            
                  
           
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
                   
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Gender*</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedCompany(value.name)
                     }}
                         sx={{ width:'100%',   maxWidth: '500Px'}} 
                    renderInput={(params) => <TextField {...params} placeholder='Select Gender'  required/>}
                    />
            </div>
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Material Status*</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedCompany(value.name)
                     }}
                         sx={{ width:'100%',   maxWidth: '500Px'}} 
                    renderInput={(params) => <TextField {...params} placeholder='Material Status'  required/>}
                    />
            </div>
    
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
                   
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Permanent Address</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder="Permanent Address"
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
            <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Current Address (This can be the same as permanent address)</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder="Current Address "
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
                   
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic"> Father's Name</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder="Enter Father's Name"
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
            <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Mother's Name</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder="Enter Mother's Name"
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
                   
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic"> Aadhar Number (India)</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder=" Aadhar Number (India)"
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
            <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Passport Number</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder="Enter Passport Nubmer"
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------fifth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic"> PAN Number (India) *</InputLabel>
                 <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     
                     onChange={(event,value)=>{
                      setSelectedDepartment(value.name)
                     }}
                         sx={{ width:'100%',   maxWidth: '500Px'}} 
                    renderInput={(params) => <TextField {...params} placeholder=' Enter PAN Number (India)'  required/>}
                    />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Image*</InputLabel>
            <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
               
                placeholder="e (e.g., Full Time, Part Time) "
                type="file"
                variant="outlined"
              />
            </div> 
          </div>
           {/* ---------------------------------------------------sixth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic"> Department (e.g., Engineering, Sales, Marketing) *</InputLabel>
                 <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      setSelectedShift(value.name)
                     }}
                         sx={{ width:'100%',   maxWidth: '500Px'}} 
                    renderInput={(params) => <TextField {...params}  placeholder="select  Department" required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Designation (e.g., Software Engineer, Team Lead)*</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
       
                placeholder="Enter Designation"
                type="text"
                variant="outlined"
                {...register('username', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------seven Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Office Shift *</InputLabel>
            <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={gender}
                     onChange={(event,value)=>{
                      setSelectedRole(value.name)
                     }}
                         sx={{ width:'100%',   maxWidth: '500Px'}} 
                    renderInput={(params) => <TextField {...params}  placeholder="Select (e.g., Morning, Evening)" />}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Username  *</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
          
                placeholder="Enter Username"
                type="text"
                variant="outlined"
                {...register('password', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------seven Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Role *</InputLabel>
            <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
               
                placeholder="(e.g., Admin, Manager, Employee)"
                type="text"
                variant="outlined"
                {...register('password')}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Password *</InputLabel>
              <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
               
                placeholder="Enter Password"
                type="text"
                variant="outlined"
                {...register('password')}
              />
            </div>
          </div>
           {/* ---------------------------------------------------eight Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Attendance*</InputLabel>
            <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
               
                placeholder="e (e.g., Full Time, Part Time) "
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Date *</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                       sx={{ width:'100%',   maxWidth: '500Px'}} 
                  // label="Date of Birth"
                  onChange={(newValue) => setSelectedBirth(newValue)}
                 
                  renderInput={(params) => (
                    <TextField name="date" {...params}       sx={{ width:'100%',   maxWidth: '500Px'}}  />
                  )}
                />
              </LocalizationProvider>
            </div>
          </div>
          {/* ====================================nine===================================================================== */}
           <div className="row my-4  d-flex flex-row">
            
            {/* <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Image*</InputLabel>
            <TextField
                id="outlined-basic"
                     sx={{ width:'100%',   maxWidth: '500Px'}} 
               
                placeholder="e (e.g., Full Time, Part Time) "
                type="file"
                variant="outlined"
              />
            </div>           */}
              {/* <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Date *</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                       sx={{ width:'100%',   maxWidth: '500Px'}} 
                  // label="Date of Birth"
                  onChange={(newValue) => setSelectedBirth(newValue)}
                 
                  renderInput={(params) => (
                    <TextField name="date" {...params}       sx={{ width:'100%',   maxWidth: '500Px'}}  />
                  )}
                />
              </LocalizationProvider>
            </div> */}
          </div>
          <div className="d-flex my-5">
          <div className="mx-4">
            <Button variant='contained' type='submit'
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
</form>
       
   


             </div>
    </div>
    </div>
    )
}

export default Addemployee
