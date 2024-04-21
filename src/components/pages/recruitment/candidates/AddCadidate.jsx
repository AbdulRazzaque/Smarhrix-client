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
function AddCadidate() {
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
        <div className="container my-5">
      <p className='sidTitle'>Dashboard / Candidate / <span>Create</span></p>
      <p className='sidTitle2'>CREATE CANDIDATE</p>
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
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Candidate First Name"
                required
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Last Name *</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Candidate Second Name"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>
           {/* ---------------------------------------------------second Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Email *</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Candidate Email"
                type=""
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Phone Number*</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
          
                placeholder="Candidate Number"
                variant="outlined"
              />
            </div>
          </div>
           {/* ---------------------------------------------------Therd Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Password *</InputLabel>
           
            <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
          
                placeholder="Candidate Password"
                variant="outlined"
                type='password'
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Confirm Password *</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
          
                placeholder="Confirm Candidate Password"
                variant="outlined"
                type='password'
              />
            </div>
          </div>
           {/* ---------------------------------------------------Forth Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Fax *</InputLabel>
           
            <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
          
                placeholder="Candidate Password"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">website*</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
          
                placeholder="Confirm Candidate Password"
                variant="outlined"

              />
            </div>
          </div>
           {/* ---------------------------------------------------Fith Row Start Here------------------------------------------- */}
           <div className="row my-4  d-flex flex-row">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic"> About *</InputLabel>
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


         {/* ======================================therd section  ====================================================================================== */}
         <div className=" px-5 my-3 bg-white" >
        <div className="row">
            <div className="col-6">

        <p className="whitboxtitle my-4">Professional Details</p>
            </div>
         
        </div>
          
        <hr/>
        
    
    {/* <div className=""> */}
    {/* </div> */}
   <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Total Experrience (in Years) *</InputLabel>

              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Enter Total Number Years of Experrience"
                required
                type="text"
                variant="outlined"
              />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Highest Level of Education *</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Btech, B.sc, M.Sc etc"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>

           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Expeted Salary*</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="State"
                type=""
                variant="outlined"
              />
<div className='mt-5'>
<InputLabel htmlFor="outlined-basic">Add your skills *</InputLabel>
           
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
                               renderInput={(params) => <TextField {...params} placeholder='Select Skills' required/>}
                               />
</div>

            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Additional Information *</InputLabel>
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
         {/* ======================================forth section  ====================================================================================== */}
         <div className=" px-5 my-3 bg-white" >
        <div className="row">
            <div className="col-6">

        <p className="whitboxtitle my-4">Other information</p>
            </div>
         
        </div>
          
        <hr/>
        
    
    {/* <div className=""> */}
    {/* </div> */}
   <div className="row d-flex flex-row mt-4">
            
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
                        width:'100%',   maxWidth: '500Px' 
                        }}
                    renderInput={(params) => <TextField {...params} placeholder='Select Source' required/>}
                    />
            </div>          
              <div className="col-6">
              <InputLabel htmlFor="outlined-basic">Twiteer profile </InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Twiteer profile"
                required
                type="number"
                variant="outlined"
              />
         
            </div>
          </div>

           <div className="row my-4  d-flex flex-row">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Skype Profile</InputLabel>
              <TextField
                id="outlined-basic"
                 sx={{ 
                                    width:'100%',   maxWidth: '500Px' 
                                  }}
                placeholder="Skype Profile"
                type=""
                variant="outlined"
              />


            </div>          
              
          </div>

   

       
       
      
        </div>
         {/* ======================================fifth section  ====================================================================================== */}
         <div className=" px-5 my-3 bg-white" >
        <div className="row">
            <div className="col-6">

        <p className="whitboxtitle my-4">Other information</p>
            </div>
        </div>
        <hr/>
   <div className="row d-flex flex-row py-3 mt-4">   
            <div className="col-6">
            <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '25px',color:'#2F69FF' }}/>}style={{ fontSize: '14px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white', textTransform:'none'}}  >
        Add Education
        </Button>
            </div>                    
          </div>

        </div>
         {/* ======================================sisth section  ====================================================================================== */}
         <div className=" px-5 my-3 bg-white" >
        <div className="row">
            <div className="col-6">

        <p className="whitboxtitle my-4">Work Experiences</p>
            </div>
        </div>
        <hr/>
   <div className="row d-flex flex-row py-3 mt-4">   
            <div className="col-6">
            <Button variant="outlined" startIcon={<AddCircleIcon style={{ fontSize: '25px',color:'#2F69FF' }}/>}style={{ fontSize: '14px',borderRadius: 50 ,color:'#2F69FF', backgroundColor:'white', textTransform:'none'}}  >
        Add Work Experience
        </Button>
            </div>                    
          </div>

        </div>
         {/* ======================================sisth section  ====================================================================================== */}
        
             <div className=" px-5 my-4 py-2 bg-white">
        <p className="whitboxtitle my-4">Attachment Information</p>
        <hr/>
           {/* ---------------------------------------------------First Row Start Here------------------------------------------- */}
           <div className="row d-flex flex-row mt-4">
            
            <div className="col-12">
            <InputLabel htmlFor="outlined-basic">Profile image </InputLabel>
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
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic">Resume</InputLabel>

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
            <InputLabel htmlFor="outlined-basic"> Cover Letter </InputLabel>

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
           <div className="row d-flex flex-row mt-4">
            
            <div className="col-6">
            <InputLabel htmlFor="outlined-basic"> Contract </InputLabel>

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

export default AddCadidate
