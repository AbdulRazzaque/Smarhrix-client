import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../../../Dashhead';
import Header from '../header/Header';
import '../dashboard.scss'
import { Autocomplete, Button, InputLabel, TextField } from '@mui/material';
import axios from 'axios';
import { getCompany } from './Company';
import { useForm } from 'react-hook-form';
function Addcompany() {
    const [display,setDisplay]=React.useState(false)
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
    const [data,setData]= useState([])
    const [selectCompanyType,setSelectedCompanyType]=useState([])
    const [selectLocation,setSelectedLocation]=useState([])
    const [file, setFile] = useState(null);
    
 
     
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
// =================================================POST API CODE===========================================================================
// const company_logo = data.company_logo[0]; // Assuming company_logo is from the form data
const handelLogo = (e)=>{
  console.log(e.target.files[0])
setFile(e.target.files[0])
}


const onSubmit = async(data)=>{
  try {
    var obj ={
      company_type:selectCompanyType,
      location:selectLocation,
      company_logo:file,
      ...data
    }
    console.log('obj',obj)
    await axios.post(`${url}/api/create-company/`,obj)
    .then(response=>{
      setData(response)
    }).catch(error=>console.log(error))
    reset()
    getCompany()
  } catch (error) {
    console.log(error)
    
  }
  
  
}
console.log(file)
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
      <p className='sidTitle'>Dashboard / Company / <span>Add Company</span></p>
      <p className='sidTitle2'>ADD COMPNAY</p>
    </div>

    <div className="box ">
{/* ===================================================================================================================================================================== */}
        <div className=" px-5 my-5 bg-white">
        <p className="whitboxtitle my-4">Add New company</p>
        <hr/>
        <form onSubmit={handleSubmit(onSubmit)}>


{/* ---------------------------------------------------First Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row mt-4">

            <div className="col-6">
          <InputLabel htmlFor="outlined-basic">Company Name *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="eg, Smartiex"
                type="text"
                variant="outlined"
                {...register('company_name', { required: true })}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Company Type *</InputLabel>
              <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    getOptionLabel={(department)=>department.name}
                     options={department}
                     onChange={(event,value)=>{
                      setSelectedCompanyType(value.name)
                     }}
                    sx={{ width:'100%',   maxWidth: '500Px'}} 
                    renderInput={(params) => <TextField {...params}placeholder="Select Company Type" />}
                    /> 
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Trade/Business Name</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Treading Name"
                type=""
                variant="outlined"
                {...register('treading_name')}
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">GST Number</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Treading Name"
                type="number"
                variant="outlined"
                {...register('treading_name')}
              />
            </div> 
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Pan Card Number</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Treading Name"
                type=""
                variant="outlined"
                {...register('treading_name')}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Registered Office Address</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Registered Office Address"
                variant="outlined"
                {...register('registration_number')}
              />
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic"> Line 1</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Treading Name"
                type=""
                variant="outlined"
                {...register('treading_name')}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">  Line 2</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Registered Office Address"
                variant="outlined"
                {...register('registration_number')}
              />
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">City</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Treading Name"
                type=""
                variant="outlined"
                {...register('treading_name')}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">State</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Registered Office Address"
                variant="outlined"
                {...register('registration_number')}
              />
            </div>
          </div>
           {/* ---------------------------------------------------Thired Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Country</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Treading Name"
                type="number"
                variant="outlined"
                {...register('treading_name')}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">PIN Code </InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Registration Number"
                variant="outlined"
                {...register('registration_number')}
              />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Phone number *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Phone number"
                type="number"
                variant="outlined"
                {...register('phone_number', { required: true })}
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Email *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
                placeholder="Email"
                variant="outlined"
                {...register('email', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Company Website</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="website (optional)"
                type="text"
                variant="outlined"
                {...register('website', { required: true })}
              />
            </div>          
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">TIN Number</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="TIN Number"
                type="text"
                variant="outlined"
                {...register('website', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
           <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Compny Logo</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
             
                // onChange={(e)=>setFile(e.target.files[0])}
                onChange={(e)=>handelLogo(e)}
                inputProps={{ accept: 'image/*' }} // Accept only image files
                type="file"
                variant="outlined"
                
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Currency *</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Currency"
                type="text" 
                variant="outlined"
                {...register('website', { required: true })}
              />
            </div>
          </div>
           {/* ---------------------------------------------------forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Signature of Admin</InputLabel>
              <TextField
                id="outlined-basic"
                sx={{ width:'100%',   maxWidth: '500Px'}} 
               placeholder="Enter Tax Number"
                type="number"
                variant="outlined"
                {...register('tax_number', { required: true })}
              />
            </div>          
           
          </div>
          <div className="col-xl-4 mt-2 col-md-12 col-sm-12 my-5">
            <Button variant='contained'  type='submit'
            // InputProps={{ sx: { borderRadius: 10, backgroundColor:"white"} }}
            sx={{borderRadius:34, backgroundColor:'#2F69FF'}}
            >Add Company</Button>
            </div>
    </form>
        </div>
    </div>


             </div>
    </div>
    )
}

export default Addcompany
